import { CalendarEntry } from "./calendar-entry";

export interface CalendarDay {
  date: Date;
  day: Number;
  activeMonth: Boolean;
  entry?: CalendarEntry;
}
