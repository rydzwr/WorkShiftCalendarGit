import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-color-dialog',
  templateUrl: './edit-color-dialog.component.html',
  styleUrls: ['./edit-color-dialog.component.css']
})
export class EditColorDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditColorDialogComponent>) { }

  newColorEntered(color: string) {
    this.dialogRef.close(color);
  }
}
