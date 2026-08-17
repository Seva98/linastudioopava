import "server-only";

import { z } from "zod";

import type { ScheduleProvider, ScheduleQuery, StudioClass } from "./types";

const externalClassSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string().optional(),
  title: z.string().optional(),
  startsAt: z.string().optional(),
  start: z.string().optional(),
  instructor: z.union([z.string(), z.null()]).optional(),
  availableSpots: z.union([z.number(), z.null()]).optional(),
  available: z.union([z.number(), z.null()]).optional(),
  waitlistAvailable: z.boolean().optional(),
  bookingUrl: z.union([z.string().url(), z.null()]).optional(),
  cancelled: z.boolean().optional(),
});

const responseSchema = z.union([
  z.array(externalClassSchema),
  z.object({ classes: z.array(externalClassSchema) }),
  z.object({ data: z.array(externalClassSchema) }),
]);

function responseItems(response: z.infer<typeof responseSchema>) {
  if (Array.isArray(response)) return response;
  if ("classes" in response) return response.classes;
  return response.data;
}

export class OfficialIsportProvider implements ScheduleProvider {
  async listUpcoming(input: ScheduleQuery): Promise<StudioClass[]> {
    const apiUrl = process.env.ISPORT_API_URL;
    const authorization = process.env.ISPORT_API_AUTHORIZATION;
    const studioId = process.env.ISPORT_STUDIO_ID;

    if (!apiUrl || !authorization || !studioId) return [];

    const url = new URL(apiUrl);
    url.searchParams.set("studioId", studioId);
    url.searchParams.set("from", input.from.toISOString());
    url.searchParams.set("to", input.to.toISOString());
    url.searchParams.set("limit", String(input.limit));

    const response = await fetch(url, {
      headers: { Authorization: authorization, Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`iSport API returned ${response.status}`);
    }

    const parsed = responseSchema.parse(await response.json());

    return responseItems(parsed)
      .filter((item) => !item.cancelled)
      .map((item) => ({
        id: String(item.id),
        name: item.name ?? item.title ?? "",
        startsAt: item.startsAt ?? item.start ?? "",
        instructor: item.instructor ?? null,
        availableSpots: item.availableSpots ?? item.available ?? null,
        waitlistAvailable: item.waitlistAvailable ?? false,
        bookingUrl: item.bookingUrl ?? null,
      }))
      .filter((item) => item.name.length > 0 && item.startsAt.length > 0);
  }
}
