import "server-only";

import { z } from "zod";

import { siteConfig } from "@/lib/site-data";
import type { ScheduleProvider, ScheduleQuery, StudioClass } from "@/lib/isport/types";

import {
  ZENAMU_API_URL,
  ZENAMU_OFFICE_ID,
  ZENAMU_REVALIDATE_SECONDS,
} from "./config";

const upcomingLessonsQuery = `
  query UpcomingLessons($officeId: Int!, $first: Int) {
    officePublicEvents(officeId: $officeId, first: $first) {
      events {
        __typename
        ... on LectureTermOutput {
          id
          lectureTermId
          start
          isCanceled
          visibleInPublicCalendar
          activeReservationsCount
          reservationStats {
            waitlistCount
          }
          lectureInstance {
            lectureName
            capacity
            lecturers {
              user {
                name
              }
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
            id: z.string(),
            lectureTermId: z.number(),
            start: z.string(),
            isCanceled: z.boolean(),
            visibleInPublicCalendar: z.boolean(),
            activeReservationsCount: z.number(),
            reservationStats: z
              .object({ waitlistCount: z.number() })
              .nullable()
              .optional(),
            lectureInstance: z.object({
              lectureName: z.string(),
              capacity: z.number(),
              lecturers: z
                .array(z.object({ user: z.object({ name: z.string() }) }))
                .optional(),
            }),
          }),
          z.object({ __typename: z.literal("WorkshopOutput") }),
        ]),
      ),
    }),
  }),
});

export class ZenamuScheduleProvider implements ScheduleProvider {
  async listUpcoming(input: ScheduleQuery): Promise<StudioClass[]> {
    const response = await fetch(ZENAMU_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        query: upcomingLessonsQuery,
        variables: { officeId: ZENAMU_OFFICE_ID, first: input.limit },
      }),
      next: { revalidate: ZENAMU_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`Zenamu API returned ${response.status}`);
    }

    const parsed = responseSchema.parse(await response.json());

    return parsed.data.officePublicEvents.events
      .filter((event) => event.__typename === "LectureTermOutput")
      .filter((event) => !event.isCanceled && event.visibleInPublicCalendar)
      .map((event) => ({
        id: String(event.lectureTermId),
        name: event.lectureInstance.lectureName.trim(),
        startsAt: event.start,
        instructor: event.lectureInstance.lecturers?.[0]?.user.name ?? null,
        availableSpots: Math.max(
          0,
          event.lectureInstance.capacity - event.activeReservationsCount,
        ),
        waitlistAvailable: (event.reservationStats?.waitlistCount ?? 0) > 0,
        bookingUrl: siteConfig.bookingUrl,
      }));
  }
}
