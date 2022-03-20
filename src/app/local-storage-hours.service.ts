import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HourService } from './hour.service';
import { Hour } from './hours-editor/hours';

@Injectable()
export class LocalStorageHoursService extends HourService {
  private hoursSubject: BehaviorSubject<Hour[]>;
  private nextId: number;

  private localStorage: Storage;

  constructor() {
    super();

    this.localStorage = window.localStorage;

    const hoursString = this.localStorage.getItem("hours");
    const hoursArray = (hoursString) ? JSON.parse(hoursString) : [];
    const nextIdString = this.localStorage.getItem("hours_id");
    this.nextId = (nextIdString) ? Number.parseInt(nextIdString) : 0;

    this.hoursSubject = new BehaviorSubject<Hour[]>(hoursArray);
  }

  getHours(): Observable<Hour[]> {
    return this.hoursSubject.asObservable();
  }

  getHour(id: number) {
    return this.hoursSubject.value.find(h => h.id === id);
  }

  addHour(newHour: Hour) {
    newHour.id = this.nextId++;
    const hoursArray = [... this.hoursSubject.value, newHour];
    this.localStorage.setItem("hours", JSON.stringify(hoursArray));
    this.localStorage.setItem("hours_id", this.nextId.toFixed(0));
    this.hoursSubject.next(hoursArray);
  }

  updateHour(id: number, hour: Hour) {
    const hours = this.hoursSubject.value.map(h => (h.id === id) ? hour : h);
    this.localStorage.setItem("hours", JSON.stringify(hours));
    this.hoursSubject.next(hours);
  }

  deleteHour(id: number) {
    const hours = this.hoursSubject.value.filter(h => h.id !== id)
    this.localStorage.setItem("hours", JSON.stringify(hours));
    this.hoursSubject.next(hours);
  }
}
