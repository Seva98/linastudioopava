import {
  formatAvailability,
  formatClassTime,
  formatDayLabel,
} from "@/lib/isport/schedule";
import type { StudioClass } from "@/lib/isport/types";

type ScheduleItemProps = {
  item: StudioClass;
  now?: Date;
};

export function ScheduleItem({ item, now }: ScheduleItemProps) {
  const availability = formatAvailability(item);
  return (
    <article className="schedule-item">
      <p className="schedule-item__day">{formatDayLabel(item.startsAt, now)}</p>
      <time dateTime={item.startsAt}>{formatClassTime(item.startsAt)}</time>
      <h3>{item.name}</h3>
      {availability ? <p className="schedule-item__status">{availability}</p> : null}
    </article>
  );
}
