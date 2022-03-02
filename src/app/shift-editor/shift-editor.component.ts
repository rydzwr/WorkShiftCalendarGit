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

  constructor(private _shiftService: ShiftService) { }

  ngOnInit(): void {
    this._shiftService.getShifts().subscribe(shifts => this.shifts = shifts);
  }

}
