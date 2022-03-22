import { Hour } from "../hours-editor/hours";
import { Shift } from "../shift-editor/shift";

export interface CalendarEntry {
  date: Date;
  id: number;
  shiftId?: number;
  hoursId?: number;
  shift?: Shift;
  hours?: Hour;
}


