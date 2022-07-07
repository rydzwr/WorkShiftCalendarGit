import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Shift } from '../shift-editor/shift';
import { ShiftsService } from './shifts.service';

@Injectable()
export class MockShiftsService extends ShiftsService {
  private shiftsSubject: BehaviorSubject<Shift[]>;
  private nextId: number;

  constructor() {
    super();

    const mockShifts = [
      {id: 0, name: "morning", color: "#FFC300"},
      {id: 1, name: "afternoon", color: "#FF5733"},
      {id: 2, name: "night", color: "#C70039"},
      {id: 3, name: "free", color: "#09B730"}
    ];

    this.nextId = 4;
    this.shiftsSubject = new BehaviorSubject<Shift[]>(mockShifts);
  }

  getShifts(): Observable<Shift[]> {
    return this.shiftsSubject.asObservable();
  }

  getShift(id: number) {
    return this.shiftsSubject.value.find(s => s.id === id);
  }

  addShift(newShift: Shift) {
    newShift.id = this.nextId++;
    this.shiftsSubject.next([... this.shiftsSubject.value, newShift]);
  }

  updateShift(id: number, shift: Shift) {
    const shifts = this.shiftsSubject.value;
    this.shiftsSubject.next(shifts.map(s => (s.id === id) ? shift : s));

    //const index = this.mockShifts.findIndex(s => s.id === id);
    //this.mockShifts[index] = shift;
  }

  deleteShift(id: number) {
    const shifts = this.shiftsSubject.value;
    this.shiftsSubject.next(shifts.filter(s => s.id !== id));

    //const index = this.mockShifts.findIndex(s => s.id === id);
    //this.mockShifts.slice(index, 1);
  }
}
