export type StudioClass = {
  id: string;
  name: string;
  startsAt: string;
  instructor: string | null;
  availableSpots: number | null;
  waitlistAvailable: boolean;
  bookingUrl: string | null;
};

export type ScheduleQuery = {
  from: Date;
  to: Date;
  limit: number;
};

export interface ScheduleProvider {
  listUpcoming(input: ScheduleQuery): Promise<StudioClass[]>;
}
