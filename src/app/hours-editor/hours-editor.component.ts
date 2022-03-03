import { Component, OnInit } from '@angular/core';
import { HourService } from '../hour.service';
import { Hour } from './hours';

@Component({
  selector: 'app-hours-editor',
  templateUrl: './hours-editor.component.html',
  styleUrls: ['./hours-editor.component.css']
})
export class HoursEditorComponent implements OnInit {

  hours: Hour[] = [];

  constructor(private _hourService: HourService) { }

  ngOnInit(): void {
    this._hourService.getHours().subscribe(hours => this.hours = hours);
  }
}
