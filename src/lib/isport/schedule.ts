import type { ScheduleProvider, StudioClass } from "./types";

export const STUDIO_TIME_ZONE = "Europe/Prague";

type DateParts = {
  year: number;
  month: number;
  day: number;
};

function getDateParts(date: Date): DateParts {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: STUDIO_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  return { year: value("year"), month: value("month"), day: value("day") };
}

function dateKey(date: Date) {
  const { year, month, day } = getDateParts(date);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function shiftedDateKey(date: Date, days: number) {
  const { year, month, day } = getDateParts(date);
  const shifted = new Date(Date.UTC(year, month - 1, day + days));
  return `${shifted.getUTCFullYear()}-${String(shifted.getUTCMonth() + 1).padStart(2, "0")}-${String(shifted.getUTCDate()).padStart(2, "0")}`;
}

export function formatDayLabel(startsAt: string, now = new Date()) {
  const date = new Date(startsAt);
  const todayKey = dateKey(now);
  const classKey = dateKey(date);

  if (classKey === todayKey) return "Dnes";
  if (classKey === shiftedDateKey(now, 1)) return "Zítra";

  const weekday = new Intl.DateTimeFormat("cs-CZ", {
    timeZone: STUDIO_TIME_ZONE,
    weekday: "short",
  })
    .format(date)
    .replace(".", "");
  const calendarDate = new Intl.DateTimeFormat("cs-CZ", {
    timeZone: STUDIO_TIME_ZONE,
    day: "numeric",
    month: "numeric",
  }).format(date);

  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${calendarDate}`;
}

export function formatClassTime(startsAt: string) {
  return new Intl.DateTimeFormat("cs-CZ", {
    timeZone: STUDIO_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(startsAt));
}

export function formatAvailability(item: StudioClass) {
  if (item.availableSpots === null) return null;
  if (item.availableSpots > 0) return "MÍSTA VOLNÁ";
  if (item.waitlistAvailable) return "NÁHRADNÍCI";
  return "OBSAZENO";
}

export function normalizeSchedule(
  items: StudioClass[],
  now = new Date(),
  limit = 4,
) {
  const nowTime = now.getTime();
  return items
    .filter((item) => {
      const startsAt = new Date(item.startsAt).getTime();
      return Number.isFinite(startsAt) && startsAt >= nowTime;
    })
    .toSorted(
      (left, right) =>
        new Date(left.startsAt).getTime() - new Date(right.startsAt).getTime(),
    )
    .slice(0, limit);
}

export async function loadUpcomingSchedule(
  provider: ScheduleProvider,
  now = new Date(),
  onError: (error: unknown) => void = () => undefined,
) {
  const to = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

  try {
    const classes = await provider.listUpcoming({ from: now, to, limit: 12 });
    return normalizeSchedule(classes, now, 4);
  } catch (error) {
    onError(error);
    return [];
  }
}
