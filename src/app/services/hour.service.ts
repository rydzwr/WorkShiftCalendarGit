import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hour } from '../hours-editor/hours';

@Injectable()
export abstract class HourService {
  abstract getHours(): Observable<Hour[]>;
  abstract getHour(id: number): Hour | undefined;
  abstract addHour(newHour: Hour): void;
  abstract updateHour(id: number, hour: Hour): void;
  abstract deleteHour(id: number): void;
  abstract updateHourName(id: number, newName: string): void;
}
