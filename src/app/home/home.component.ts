import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openSettings(): void {
    this._bottomSheet.open(SettingsComponent);
  }

  ngOnInit(): void {
  }

}
