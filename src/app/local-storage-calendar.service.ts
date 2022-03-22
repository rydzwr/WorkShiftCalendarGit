import { Injectable } from '@angular/core';
import { CalendarService } from './calendar.service';
import { CalendarEntry } from './calendar/calendar-entry';
import { HourService } from './hour.service';
import { ShiftsService } from './shifts.service';

@Injectable()
export class LocalStorageCalendarService extends CalendarService {
  private entries: CalendarEntry[];
  private nextId: number;
  private localStorage: Storage;

  constructor(private _shiftsService: ShiftsService, private _hoursService: HourService) {
    super();

    this.localStorage = window.localStorage;

    const nextIdString = this.localStorage.getItem("entry_id");
    this.nextId = (nextIdString) ? Number.parseInt(nextIdString) : 0;
    const entriesString = this.localStorage.getItem("entries");
    this.entries = (entriesString) ? JSON.parse(entriesString) : [];
    this.entries.map(e => {
      e.date = new Date(e.date);
      return e;
    });
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
    newEntry.shift = undefined;
    newEntry.hours = undefined;

    this.entries.push(newEntry);
    this.localStorage.setItem("entries", JSON.stringify(this.entries));
    this.localStorage.setItem("entry_id", this.nextId.toFixed(0));
    return this.getEntry(newEntry.id);
  }

  updateEntry(id: number, entry: CalendarEntry): CalendarEntry | undefined {
    if (entry.hoursId === undefined && entry.shiftId === undefined) {
      this.deleteEntry(id);
      return undefined;
    }

    entry.shift = undefined;
    entry.hours = undefined;

    this.entries = this.entries.map(e => (e.id === id) ? entry : e);
    this.localStorage.setItem("entries", JSON.stringify(this.entries));
    return this.getEntry(id);
  }

  deleteEntry(id: number): void {
    this.entries = this.entries.filter(e => e.id !== id);
    this.localStorage.setItem("entries", JSON.stringify(this.entries));
  }
}
