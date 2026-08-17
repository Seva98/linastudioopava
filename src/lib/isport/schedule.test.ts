import { describe, expect, it } from "vitest";

import {
  formatAvailability,
  formatClassTime,
  formatDayLabel,
  loadUpcomingSchedule,
  normalizeSchedule,
} from "./schedule";
import type { ScheduleProvider, StudioClass } from "./types";

const baseClass: StudioClass = {
  id: "class-1",
  name: "Barre",
  startsAt: "2026-08-17T16:00:00.000Z",
  instructor: null,
  availableSpots: 2,
  waitlistAvailable: false,
  bookingUrl: null,
};

describe("schedule formatting", () => {
  const now = new Date("2026-08-17T10:00:00.000Z");

  it("formats Prague-relative day labels", () => {
    expect(formatDayLabel("2026-08-17T16:00:00.000Z", now)).toBe("Dnes");
    expect(formatDayLabel("2026-08-18T06:00:00.000Z", now)).toBe("Zítra");
    expect(formatDayLabel("2026-08-21T07:00:00.000Z", now)).toMatch(/^Pá 21/);
  });

  it("uses Prague calendar days across daylight-saving changes", () => {
    const beforeSpringChange = new Date("2026-03-28T22:30:00.000Z");
    expect(formatDayLabel("2026-03-29T21:30:00.000Z", beforeSpringChange)).toBe("Zítra");
  });

  it("formats time in Europe/Prague", () => {
    expect(formatClassTime("2026-08-17T16:00:00.000Z")).toBe("18:00");
  });

  it("maps capacity states", () => {
    expect(formatAvailability(baseClass)).toBe("MÍSTA VOLNÁ");
    expect(formatAvailability({ ...baseClass, availableSpots: 0, waitlistAvailable: true })).toBe("NÁHRADNÍCI");
    expect(formatAvailability({ ...baseClass, availableSpots: 0 })).toBe("OBSAZENO");
    expect(formatAvailability({ ...baseClass, availableSpots: null })).toBeNull();
  });
});

describe("normalizeSchedule", () => {
  it("filters past values, orders chronologically, and respects the limit", () => {
    const now = new Date("2026-08-17T10:00:00.000Z");
    const result = normalizeSchedule(
      [
        { ...baseClass, id: "late", startsAt: "2026-08-19T08:00:00.000Z" },
        { ...baseClass, id: "past", startsAt: "2026-08-17T08:00:00.000Z" },
        { ...baseClass, id: "soon", startsAt: "2026-08-17T12:00:00.000Z" },
        { ...baseClass, id: "middle", startsAt: "2026-08-18T08:00:00.000Z" },
      ],
      now,
      2,
    );

    expect(result.map((item) => item.id)).toEqual(["soon", "middle"]);
  });

  it("ignores invalid start times", () => {
    expect(normalizeSchedule([{ ...baseClass, startsAt: "invalid" }])).toEqual([]);
  });
});

describe("loadUpcomingSchedule", () => {
  const now = new Date("2026-08-17T10:00:00.000Z");

  it("returns an empty schedule for an empty provider response", async () => {
    const provider: ScheduleProvider = { listUpcoming: async () => [] };
    await expect(loadUpcomingSchedule(provider, now)).resolves.toEqual([]);
  });

  it("returns an empty schedule when the provider fails", async () => {
    const failure = new Error("API unavailable");
    const errors: unknown[] = [];
    const provider: ScheduleProvider = {
      listUpcoming: async () => {
        throw failure;
      },
    };

    await expect(loadUpcomingSchedule(provider, now, (error) => errors.push(error))).resolves.toEqual([]);
    expect(errors).toEqual([failure]);
  });

  it("requests a fourteen-day window and limits the provider query", async () => {
    let capturedInput: Parameters<ScheduleProvider["listUpcoming"]>[0] | undefined;
    const provider: ScheduleProvider = {
      listUpcoming: async (input) => {
        capturedInput = input;
        return [];
      },
    };

    await loadUpcomingSchedule(provider, now);
    expect(capturedInput).toBeDefined();
    if (!capturedInput) throw new Error("Provider was not called");
    expect(capturedInput.limit).toBe(12);
    expect(capturedInput.to.getTime() - capturedInput.from.getTime()).toBe(14 * 24 * 60 * 60 * 1000);
  });
});
