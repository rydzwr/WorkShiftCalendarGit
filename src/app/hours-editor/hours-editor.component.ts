import { Component, OnInit } from '@angular/core';
import { HourService } from '../services/hour.service';
import { Hour } from './hours';
import {EditNameDialogComponent} from "../edit-name-dialog/edit-name-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {EditColorDialogComponent} from "../edit-color-dialog/edit-color-dialog.component";

@Component({
  selector: 'app-hours-editor',
  templateUrl: './hours-editor.component.html',
  styleUrls: ['./hours-editor.component.css']
})
export class HoursEditorComponent implements OnInit {

  hours: Hour[] = [];
  newHour: Hour | undefined = undefined;
  deleteMode: Boolean = false;

  constructor(private _hourService: HourService, public dialog: MatDialog) { }

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

  changeHourNameClicked(id: number) {
    if (!this.deleteMode)
    {
      const dialogRef = this.dialog.open(EditNameDialogComponent, {
        width: '95%'
      });
      dialogRef.afterClosed().subscribe((newName: string) => {
        if (newName && newName.trim() !== '')
          this._hourService.updateHourName(id, newName);
      })
    }
  }

  changeHourColorClicked(id: number) {
    if (!this.deleteMode)
    {
      const dialogRef = this.dialog.open(EditColorDialogComponent, {
        width: '95%'
      });
      dialogRef.afterClosed().subscribe((color: string) => {
        this._hourService.updateHourColor(id, color);
      })
    }
  }

  deleteHour(id: number) {
    if (this.deleteMode) {
      this._hourService.deleteHour(id);
    }
  }
}
