import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEntry } from '../calendar/calendar-entry';

@Injectable()
export abstract class CalendarService {
  abstract getEntries(start: Date, end: Date): CalendarEntry[];
  abstract getEntry(id: number): CalendarEntry | undefined;
  abstract addEntry(newEntry: CalendarEntry): CalendarEntry | undefined;
  abstract updateEntry(id: number, entry: CalendarEntry): CalendarEntry | undefined;
  abstract deleteEntry(id: number): void;
}
