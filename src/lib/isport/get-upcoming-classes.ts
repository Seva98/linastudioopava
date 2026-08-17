import "server-only";

import { FixtureScheduleProvider } from "./fixture-provider";
import { OfficialIsportProvider } from "./official-provider";
import { loadUpcomingSchedule } from "./schedule";

export async function getUpcomingClasses(now = new Date()) {
  const fixtureEnabled =
    process.env.NODE_ENV === "development" &&
    process.env.ISPORT_USE_FIXTURE !== "false";
  const provider = fixtureEnabled
    ? new FixtureScheduleProvider(now)
    : new OfficialIsportProvider();
  return loadUpcomingSchedule(provider, now, (error) => {
    console.error("Unable to load iSport schedule", error);
  });
}
