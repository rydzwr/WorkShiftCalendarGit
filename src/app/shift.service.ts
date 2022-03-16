import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Shift } from './shift-editor/shift';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private shiftsSubject: BehaviorSubject<Shift[]>;

  constructor() {
    const mockShifts = [
      {id: 1, name: "morning", color: "#FFC300"},
      {id: 2, name: "afternoon", color: "#FF5733"},
      {id: 3, name: "night", color: "#C70039"},
      {id: 4, name: "free", color: "#09B730"}
    ];

    this.shiftsSubject = new BehaviorSubject<Shift[]>(mockShifts);
  }

  getShifts(): Observable<Shift[]> {
    return this.shiftsSubject.asObservable();
  }

  getShift(id: number) {
    return this.shiftsSubject.value.find(s => s.id === id);
  }

  addShift(newShift: Shift) {
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
