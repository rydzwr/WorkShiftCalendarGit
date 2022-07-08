import { Component, OnInit } from '@angular/core';
import { ShiftsService } from '../services/shifts.service';
import { Shift } from './shift';
import {MatDialog} from "@angular/material/dialog";
import {EditNameDialogComponent} from "../edit-name-dialog/edit-name-dialog.component";
import {EditColorDialogComponent} from "../edit-color-dialog/edit-color-dialog.component";

@Component({
  selector: 'app-shift-editor',
  templateUrl: './shift-editor.component.html',
  styleUrls: ['./shift-editor.component.css']
})
export class ShiftEditorComponent implements OnInit {

  shifts: Shift[] = [];
  newShift: Shift | undefined = undefined;
  deleteMode: Boolean = false;

  constructor(private _shiftService: ShiftsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._shiftService.getShifts().subscribe(shifts => this.shifts = shifts);
  }

  showNewShift() {
    this.newShift = { id: 0, name: "", color: "#ffffff" };
  }

  addShift() {
    if (this.newShift && this.newShift.name.trim() !== "") {
      this._shiftService.addShift(this.newShift);
      this.newShift = undefined;
    }
  }

  changeShiftNameClicked(id: number) {
    if (!this.deleteMode)
    {
      const dialogRef = this.dialog.open(EditNameDialogComponent, {
        width: '95%'
      });
      dialogRef.afterClosed().subscribe((newName: string) => {
        if (newName && newName.trim() !== '')
          this._shiftService.updateShiftName(id, newName);
      })
    }
  }

  changeShiftColorClicked(id: number) {
    if (!this.deleteMode)
    {
      const dialogRef = this.dialog.open(EditColorDialogComponent, {
        width: '95%'
      });
      dialogRef.afterClosed().subscribe((color: string) => {
        this._shiftService.updateShiftColor(id, color);
      })
    }
  }

  deleteShift(id: number) {
    if (this.deleteMode) {
      this._shiftService.deleteShift(id);
    }
  }
}
