import { Component, Inject, Input, OnInit } from '@angular/core';
import { HourService } from '../hour.service';
import { Hour } from '../hours-editor/hours';
import { Shift } from '../shift-editor/shift';
import { ShiftsService } from '../shifts.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-selector-dialog',
  templateUrl: './selector-dialog.component.html',
  styleUrls: ['./selector-dialog.component.css'],
})
export class SelectorDialogComponent implements OnInit {
  shifts: Shift[] | Hour[] = [];
  clearShift: Shift = { id: -1, name: "clear", color: "white" };

  constructor(
    private _shiftService: ShiftsService,
    private _hourService: HourService,
    public dialogRef: MatDialogRef<SelectorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {
    if (this.data === 'shifts') {
      this._shiftService
        .getShifts()
        .subscribe((shifts) => (this.shifts = shifts));
    } else if (this.data === 'hours') {
      this._hourService.getHours().subscribe((hours) => (this.shifts = hours));
    }
  }

  itemClicked(shift: Shift | Hour) {
    this.dialogRef.close(shift);
  }
}
