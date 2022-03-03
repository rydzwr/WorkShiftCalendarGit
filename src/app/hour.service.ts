import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hour } from './hours-editor/hours';

@Injectable({
  providedIn: 'root'
})
export class HourService {

  constructor() { }

  getHours(): Observable<Hour[]> {
    const mockHours: Hour[] = [
      { id: 1, name: "8H", color: "#ff0000" },
      {id: 2, name: "12H", color: "#00ff00"},
    ];
    return of(mockHours);
  }
}
