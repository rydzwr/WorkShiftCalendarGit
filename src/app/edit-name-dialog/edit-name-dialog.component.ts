import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-name-dialog',
  templateUrl: './edit-name-dialog.component.html',
  styleUrls: ['./edit-name-dialog.component.css']
})
export class EditNameDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditNameDialogComponent>) {
  }

  newNameEntered(newName: string) {
    this.dialogRef.close(newName);
  }
}
