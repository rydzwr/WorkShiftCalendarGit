import { Component, OnInit } from '@angular/core';
import { HourService } from '../services/hour.service';
import { Hour } from './hours';

@Component({
  selector: 'app-hours-editor',
  templateUrl: './hours-editor.component.html',
  styleUrls: ['./hours-editor.component.css']
})
export class HoursEditorComponent implements OnInit {

  hours: Hour[] = [];
  newHour: Hour | undefined = undefined;
  deleteMode: Boolean = false;

  constructor(private _hourService: HourService) { }

  ngOnInit(): void {
    this._hourService.getHours().subscribe(hours => this.hours = hours);
  }

  showNewHour() {
    this.newHour = { id: 0, name: "", color: "#ffffff" };
  }

  addHour() {
    if (this.newHour && this.newHour.name.trim() !== "") {
      this._hourService.addHour(this.newHour);
      this.newHour = undefined;
    }
  }

  deleteHour(id: number) {
    if (this.deleteMode) {
      this._hourService.deleteHour(id);
    }
  }
}
