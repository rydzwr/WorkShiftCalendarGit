import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEntry } from './calendar/calendar-entry';

@Injectable()
export abstract class CalendarService {
  abstract getEntries(start: Date, end: Date): CalendarEntry[];
  abstract getEntry(id: number): CalendarEntry | undefined;
  abstract addEntry(newEntry: CalendarEntry): void;
  abstract updateEntry(id: number, entry: CalendarEntry): void;
  abstract deleteEntry(id: number): void;
}
