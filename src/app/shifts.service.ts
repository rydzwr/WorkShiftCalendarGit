import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Shift } from './shift-editor/shift';

@Injectable()
export abstract class ShiftsService {
  abstract getShifts(): Observable<Shift[]>;
  abstract getShift(id: number): Shift | undefined;
  abstract addShift(newShift: Shift): void;
  abstract updateShift(id: number, shift: Shift): void;
  abstract deleteShift(id: number): void;
}
