import { Injectable } from '@angular/core';
import { CalendarService } from './calendar.service';
import { CalendarEntry } from './calendar/calendar-entry';

@Injectable({
  providedIn: 'root'
})
export class MockCalendarService extends CalendarService{
  private entries: CalendarEntry[];
  private nextId: number;

  constructor() {
    super();

    const mockEntries: CalendarEntry[] = [
      { id: 0, date: new Date(2022, 2, 19), shiftId: 0, hoursId: 0 }
    ];

    this.entries = mockEntries;
    this.nextId = 1;
   }

  getEntries(start: Date, end: Date): CalendarEntry[] {
    return this.entries.filter((e) => (e.date > start || e.date < end));
  }

  getEntry(id: number): CalendarEntry | undefined {
    return this.entries.find(s => s.id === id);
  }

  addEntry(newEntry: CalendarEntry): void {
    newEntry.id = this.nextId++;
    this.entries.push(newEntry);
  }

  updateEntry(id: number, entry: CalendarEntry): void {
    this.entries = this.entries.map(e => (e.id === id) ? entry : e);
  }

  deleteEntry(id: number): void {
    this.entries = this.entries.filter(e => e.id !== id);
  }
}
