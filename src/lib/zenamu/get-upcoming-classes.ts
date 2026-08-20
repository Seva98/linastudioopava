import "server-only";

import { loadUpcomingSchedule } from "@/lib/isport/schedule";

import { ZenamuScheduleProvider } from "./provider";

export async function getUpcomingClasses(now = new Date()) {
  return loadUpcomingSchedule(new ZenamuScheduleProvider(), now, (error) => {
    console.error("Unable to load Zenamu schedule", error);
  });
}

