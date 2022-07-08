import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ShiftsService} from './shifts.service';
import {Shift} from "../shift-editor/shift";

@Injectable()
export class LocalStorageShiftsService extends ShiftsService {
  private shiftsSubject: BehaviorSubject<Shift[]>;
  private nextId: number;

  private localStorage: Storage;

  constructor() {
    super();

    this.localStorage = window.localStorage;

    const shiftsString = this.localStorage.getItem("shifts");
    const shiftsArray = (shiftsString) ? JSON.parse(shiftsString) : [];
    const nextIdString = this.localStorage.getItem("shifts_id");
    this.nextId = (nextIdString) ? Number.parseInt(nextIdString) : 0;

    this.shiftsSubject = new BehaviorSubject<Shift[]>(shiftsArray);
  }

  getShifts(): Observable<Shift[]> {
    return this.shiftsSubject.asObservable();
  }

  getShift(id: number) {
    return this.shiftsSubject.value.find(s => s.id === id);
  }

  addShift(newShift: Shift) {
    newShift.id = this.nextId++;
    const shiftsArray = [...this.shiftsSubject.value, newShift];
    this.localStorage.setItem("shifts", JSON.stringify(shiftsArray));
    this.localStorage.setItem("shifts_id", this.nextId.toFixed(0));
    this.shiftsSubject.next(shiftsArray);
  }

  updateShift(id: number, shift: Shift) {
    const shifts = this.shiftsSubject.value.map(s => (s.id === id) ? shift : s);
    this.localStorage.setItem("shifts", JSON.stringify(shifts));
    this.shiftsSubject.next(shifts);
  }

  deleteShift(id: number) {
    const shifts = this.shiftsSubject.value.filter(s => s.id !== id)
    this.localStorage.setItem("shifts", JSON.stringify(shifts));
    this.shiftsSubject.next(shifts);
  }

  override updateShiftName(id: number, newName: string) {
    const shiftsArray = this.shiftsSubject.value;
    const shift = shiftsArray.find((obj) => {
      return obj.id === id;
    });

    if (shift){
      shift.name = newName;
    }
    this.localStorage.setItem("shifts", JSON.stringify(shiftsArray));
  }
}
