import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shift } from './shift-editor/shift';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor() { }

  getShifts(): Observable<Shift[]> {
    const mockShifts: Shift[] = [
      { id: 1, name: "morning", color: "#ff0000" },
      {id: 2, name: "afternoon", color: "#00ff00"},
      {id: 3, name: "night", color: "#f0f0f0"}
    ];
    return of(mockShifts);
  }
}
