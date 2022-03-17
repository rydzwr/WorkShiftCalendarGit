import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ShiftEditorComponent } from './shift-editor/shift-editor.component';
import { HoursEditorComponent } from './hours-editor/hours-editor.component';
import { SettingsComponent } from './settings/settings.component';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { HomeComponent } from './home/home.component';
import { ColorPickerModule } from 'ngx-color-picker';
import {MatInputModule} from '@angular/material/input';
import { ShiftsService } from './shifts.service';
import { MockShiftsService } from './mock-shifts.service';
import { LocalStorageShiftsService } from './local-storage-shifts.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ShiftEditorComponent,
    HoursEditorComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatBottomSheetModule,
    ColorPickerModule,
    MatInputModule
  ],
  providers: [ { provide: ShiftsService, useClass: LocalStorageShiftsService } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
