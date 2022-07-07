import { Injectable } from '@angular/core';
import { CalendarService } from './calendar.service';
import { CalendarEntry } from '../calendar/calendar-entry';
import { HourService } from './hour.service';
import { ShiftsService } from './shifts.service';

@Injectable()
export class MockCalendarService extends CalendarService{
  private entries: CalendarEntry[];
  private nextId: number;

  constructor(private _shiftsService: ShiftsService, private _hoursService: HourService) {
    super();

    const mockEntries: CalendarEntry[] = [
      { id: 0, date: new Date(2022, 2, 19), shiftId: 0, hoursId: 0 }
    ];

    this.entries = mockEntries;
    this.nextId = 1;
   }

  getEntries(start: Date, end: Date): CalendarEntry[] {
    return this.entries.filter((e) => (e.date > start || e.date < end)).map((e) => {
      if (e.shiftId !== undefined) {
        const shift = this._shiftsService.getShift(e.shiftId);
        e.shift = shift;
      }

      if (e.hoursId !== undefined) {
        const hour = this._hoursService.getHour(e.hoursId);
        e.hours = hour;
      }

      return e;
    });
  }

  getEntry(id: number): CalendarEntry | undefined {
    const result = this.entries.find(s => s.id === id);

    if (!result)
      return undefined;

    if (result.shiftId !== undefined) {
      const shift = this._shiftsService.getShift(result.shiftId);
      result.shift = shift;
    }

    if (result.hoursId !== undefined) {
      const hour = this._hoursService.getHour(result.hoursId);
      result.hours = hour;
    }

    return result;
  }

  addEntry(newEntry: CalendarEntry): CalendarEntry | undefined {
    if (newEntry.hoursId === undefined && newEntry.shiftId === undefined) {
      return undefined;
    }

    newEntry.id = this.nextId++;
    this.entries.push(newEntry);
    return this.getEntry(newEntry.id);
  }

  updateEntry(id: number, entry: CalendarEntry): CalendarEntry | undefined {
    if (entry.hoursId === undefined && entry.shiftId === undefined) {
      this.deleteEntry(id);
      return undefined;
    }

    this.entries = this.entries.map(e => (e.id === id) ? entry : e);
    return this.getEntry(id);
  }

  deleteEntry(id: number): void {
    this.entries = this.entries.filter(e => e.id !== id);
  }
}
