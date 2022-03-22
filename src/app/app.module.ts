import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShiftEditorComponent } from './shift-editor/shift-editor.component';
import { HoursEditorComponent } from './hours-editor/hours-editor.component';
import { SettingsComponent } from './settings/settings.component';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HomeComponent } from './home/home.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatInputModule } from '@angular/material/input';
import { ShiftsService } from './shifts.service';
import { HourService } from './hour.service';
import { LocalStorageShiftsService } from './local-storage-shifts.service';
import { LocalStorageHoursService } from './local-storage-hours.service';
import { CalendarService } from './calendar.service';
import { MockCalendarService } from './mock-calendar.service';
import { SelectorDialogComponent } from './selector-dialog/selector-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LocalStorageCalendarService } from './local-storage-calendar.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ShiftEditorComponent,
    HoursEditorComponent,
    SettingsComponent,
    HomeComponent,
    SelectorDialogComponent,
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
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    { provide: CalendarService, useClass: LocalStorageCalendarService },
    { provide: ShiftsService, useClass: LocalStorageShiftsService },
    { provide: HourService, useClass: LocalStorageHoursService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
