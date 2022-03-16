import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../shift.service';
import { Shift } from './shift';

@Component({
  selector: 'app-shift-editor',
  templateUrl: './shift-editor.component.html',
  styleUrls: ['./shift-editor.component.css']
})
export class ShiftEditorComponent implements OnInit {

  shifts: Shift[] = [];
  newShift: Shift | undefined = undefined;
  deleteMode: Boolean = false;

  constructor(private _shiftService: ShiftService) { }

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

  deleteShift(id: number) {
    if (this.deleteMode) {
      this._shiftService.deleteShift(id);
    }
  }
}
