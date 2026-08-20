import "server-only";

import { z } from "zod";

import {
  ZENAMU_API_URL,
  ZENAMU_OFFICE_ID,
  ZENAMU_REVALIDATE_SECONDS,
} from "./config";
import {
  buildPricingGroups,
  fallbackPricingGroups,
  type LessonPrice,
} from "./pricing";

const lessonPricesQuery = `
  query LessonPrices($officeId: Int!, $first: Int) {
    officePublicEvents(officeId: $officeId, first: $first) {
      events {
        __typename
        ... on LectureTermOutput {
          lectureInstance {
            lectureName
            pricingOptions {
              value
              currency
              isVisible
            }
          }
        }
      }
    }
  }
`;

const responseSchema = z.object({
  data: z.object({
    officePublicEvents: z.object({
      events: z.array(
        z.discriminatedUnion("__typename", [
          z.object({
            __typename: z.literal("LectureTermOutput"),
            lectureInstance: z.object({
              lectureName: z.string(),
              pricingOptions: z.array(
                z.object({
                  value: z.number(),
                  currency: z.string(),
                  isVisible: z.boolean(),
                }),
              ),
            }),
          }),
          z.object({ __typename: z.literal("WorkshopOutput") }),
        ]),
      ),
    }),
  }),
});

export async function getPricingGroups() {
  try {
    const response = await fetch(ZENAMU_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        query: lessonPricesQuery,
        variables: { officeId: ZENAMU_OFFICE_ID, first: 100 },
      }),
      next: { revalidate: ZENAMU_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`Zenamu API returned ${response.status}`);
    }

    const parsed = responseSchema.parse(await response.json());
    const prices: LessonPrice[] = parsed.data.officePublicEvents.events
      .filter((event) => event.__typename === "LectureTermOutput")
      .flatMap(
        ({ lectureInstance }) =>
          lectureInstance.pricingOptions
            .filter((option) => option.isVisible)
            .map((option) => ({
              name: lectureInstance.lectureName,
              value: option.value,
              currency: option.currency,
            })),
      );
    const groups = buildPricingGroups(prices);
    return groups.length > 0 ? groups : fallbackPricingGroups;
  } catch (error) {
    console.error("Unable to load Zenamu prices", error);
    return fallbackPricingGroups;
  }
}
