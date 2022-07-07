import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { CalendarDay } from './calendar-day';
import { MatDialog } from '@angular/material/dialog';
import { SelectorDialogComponent } from '../selector-dialog/selector-dialog.component';
import { Shift } from '../shift-editor/shift';
import { Hour } from '../hours-editor/hours';
import { CalendarEntry } from './calendar-entry';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input('date') in_date: Date = new Date(Date.now());

  activeMonth: Date = new Date(Date.now());
  displayFirstDay: Date = new Date(Date.now());
  displayLastDay: Date = new Date(Date.now());

  days: CalendarDay[] = new Array<CalendarDay>(6 * 7);
  daysOfWeek = this.getWeekDays(undefined);
  today = new Date(Date.now());

  constructor(
    private _calendarService: CalendarService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.today.setHours(0, 0, 0, 0);
    this.activeMonth = this.in_date;
    this.updateDayList();
    this.updateEntries();
  }

  selectShift(day: CalendarDay) {
    const dialogRef = this.dialog.open(SelectorDialogComponent, {
      width: '250px',
      data: 'shifts',
    });

    dialogRef.afterClosed().subscribe((result: Shift | Hour) => {
      if (!result)
        return;

      if (day.entry) {
        day.entry.shiftId = (result.id !== -1) ? result.id : undefined;
        day.entry = this._calendarService.updateEntry(day.entry.id, day.entry);
      } else {
        const newEntry: CalendarEntry = {
          id: -1,
          date: day.date,
          shiftId: (result.id !== -1) ? result.id : undefined,
        };
        day.entry = this._calendarService.addEntry(newEntry);
      }
    });
  }

  selectHours(day: CalendarDay) {
    const dialogRef = this.dialog.open(SelectorDialogComponent, {
      width: '250px',
      data: 'hours',
    });

    dialogRef.afterClosed().subscribe((result: Shift | Hour) => {
      if (!result)
        return;

      if (day.entry) {
        day.entry.hoursId = (result.id !== -1) ? result.id : undefined;
        day.entry = this._calendarService.updateEntry(day.entry.id, day.entry);
      } else {
        const newEntry: CalendarEntry = {
          id: -1,
          date: day.date,
          hoursId: (result.id !== -1) ? result.id : undefined,
        };
        day.entry = this._calendarService.addEntry(newEntry);
      }
    });
  }

  updateEntries() {
    const entries = this._calendarService.getEntries(
      this.displayFirstDay,
      this.displayLastDay
    );

    /*for (let i = 0; i < 6*7; i++) {
      const date = new Date(this.displayFirstDay.getFullYear(), this.displayFirstDay.getMonth(), this.displayFirstDay.getDate() + i);
      const entry = entries.find(e => e.date.getTime() === date.getTime());
      if (entry) {
        this.days[i].entry = entry;
      }
    }*/

    for (const entry of entries) {
      const index = Number.parseInt(
        (
          (entry.date.getTime() - this.displayFirstDay.getTime()) /
          1000 /
          60 /
          60 /
          24
        ).toFixed(0)
      );

      if (index > 0 && index < 6*7)
        this.days[index].entry = entry;
    }
  }

  updateDayList() {
    this.activeMonth = new Date(
      this.activeMonth.getFullYear(),
      this.activeMonth.getMonth(),
      1
    );
    const firstDay = new Date(
      this.activeMonth.getFullYear(),
      this.activeMonth.getMonth(),
      1
    );
    const lastDay = new Date(
      this.activeMonth.getFullYear(),
      this.activeMonth.getMonth() + 1,
      0
    );

    const firstDayIndex = (firstDay.getDay() == 0 ? 7 : firstDay.getDay()) - 1;
    const lastDayIndex = firstDayIndex + lastDay.getDate() - 1;

    let previousDay = new Date(
      firstDay.getFullYear(),
      firstDay.getMonth(),
      0
    ).getDate();
    for (let i = 1; i <= firstDayIndex; i++) {
      const date = new Date(
        firstDay.getFullYear(),
        firstDay.getMonth() - 1,
        previousDay--
      );
      this.days[firstDayIndex - i] = {
        date: date,
        day: date.getDate(),
        activeMonth: false,
      };
      this.displayFirstDay = date;
    }

    let currentDay = 1;
    for (let i = firstDayIndex; i <= lastDayIndex; i++) {
      const date = new Date(
        firstDay.getFullYear(),
        firstDay.getMonth(),
        currentDay++
      );
      this.days[i] = { date: date, day: date.getDate(), activeMonth: true };
    }

    let nextDay = new Date(
      lastDay.getFullYear(),
      lastDay.getMonth() + 1,
      1
    ).getDate();
    for (let i = lastDayIndex + 1; i < 6 * 7; i++) {
      const date = new Date(
        firstDay.getFullYear(),
        firstDay.getMonth() + 1,
        nextDay++
      );
      this.days[i] = { date: date, day: date.getDate(), activeMonth: false };
      this.displayLastDay = date;
    }
  }

  getWeekDays(locale: string | string[] | undefined): String[] {
    let baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }));
      baseDate.setDate(baseDate.getDate() + 1);
    }

    return weekDays;
  }

  nextMonth() {
    this.activeMonth.setMonth(this.activeMonth.getMonth() + 1);
    this.updateDayList();
    this.updateEntries();
  }

  prevMonth() {
    this.activeMonth.setMonth(this.activeMonth.getMonth() - 1);
    this.updateDayList();
    this.updateEntries();
  }
}
