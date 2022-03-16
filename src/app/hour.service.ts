import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hour } from './hours-editor/hours';

@Injectable({
  providedIn: 'root'
})
export class HourService {
  private hoursSubject: BehaviorSubject<Hour[]>;

  constructor() {
    const mockHours = [
      { id: 1, name: "8H", color: "#810093" },
      {id: 2, name: "12H", color: "#DA0000"},
    ];

    this.hoursSubject = new BehaviorSubject<Hour[]>(mockHours);
  }

  getHours(): Observable<Hour[]> {
    return this.hoursSubject.asObservable();
  }

  getHour(id: number) {
    return this.hoursSubject.value.find(s => s.id === id);
  }

  addHour(newHour: Hour) {
    this.hoursSubject.next([... this.hoursSubject.value, newHour]);
  }

  updateHour(id: number, hour: Hour) {
    const hours = this.hoursSubject.value;
    this.hoursSubject.next(hours.map(s => (s.id === id) ? hour : s))
  }

  deleteHour(id: number) {
    const hours = this.hoursSubject.value;
    this.hoursSubject.next(hours.filter(s => s.id !== id));
  }
}
