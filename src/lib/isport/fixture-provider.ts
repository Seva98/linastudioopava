import type { ScheduleProvider, StudioClass } from "./types";

function atLocalTime(base: Date, daysAhead: number, hour: number) {
  const date = new Date(base);
  date.setDate(date.getDate() + daysAhead);
  date.setHours(hour, 0, 0, 0);
  return date.toISOString();
}

export function createFixtureClasses(now = new Date()): StudioClass[] {
  return [
    {
      id: "fixture-reformer-evening",
      name: "Pilates na reformeru",
      startsAt: atLocalTime(now, 0, Math.max(18, now.getHours() + 1)),
      instructor: "Nikola",
      availableSpots: 3,
      waitlistAvailable: false,
      bookingUrl: null,
    },
    {
      id: "fixture-barre-morning",
      name: "Barre",
      startsAt: atLocalTime(now, 1, 8),
      instructor: "Tereza Ševčíková",
      availableSpots: 5,
      waitlistAvailable: false,
      bookingUrl: null,
    },
    {
      id: "fixture-mat-evening",
      name: "Pilates na podložce",
      startsAt: atLocalTime(now, 1, 17),
      instructor: "Veronika",
      availableSpots: 2,
      waitlistAvailable: false,
      bookingUrl: null,
    },
    {
      id: "fixture-reformer-friday",
      name: "Pilates na reformeru",
      startsAt: atLocalTime(now, 3, 9),
      instructor: "Nikola",
      availableSpots: 1,
      waitlistAvailable: false,
      bookingUrl: null,
    },
  ];
}

export class FixtureScheduleProvider implements ScheduleProvider {
  constructor(private readonly now = new Date()) {}

  async listUpcoming(): Promise<StudioClass[]> {
    return createFixtureClasses(this.now);
  }
}
