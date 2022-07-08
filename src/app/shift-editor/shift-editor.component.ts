import { Component, OnInit } from '@angular/core';
import { ShiftsService } from '../services/shifts.service';
import { Shift } from './shift';
import {MatDialog} from "@angular/material/dialog";
import {EditNameDialogComponent} from "../edit-name-dialog/edit-name-dialog.component";

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
    const dialogRef = this.dialog.open(EditNameDialogComponent, {
      width: '95%'
    });
    dialogRef.afterClosed().subscribe((newName: string) => {
      if (newName && newName.trim() !== '')
        this._shiftService.updateShiftName(id, newName);
    })
  }

  deleteShift(id: number) {
    if (this.deleteMode) {
      this._shiftService.deleteShift(id);
    }
  }
}
