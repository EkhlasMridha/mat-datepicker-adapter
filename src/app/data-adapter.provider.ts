import { NativeDateAdapter } from '@angular/material/core';
import { DateFormatePipe } from './date-formate.pipe';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment-timezone';

const moment = _rollupMoment || _moment;

export class UtcDateAdapter extends NativeDateAdapter {
  currentTime: Date = new Date();
  override format(date: Date, displayFormat: Object): string {
    this.lastDateTimeValue = date;
    let format = new DateFormatePipe();
    let result = format.transform(date);

    return result ?? '';
  }

  lastDateTimeValue = new Date();

  override createDate(year: number, month: number, date: number): Date {
    let newDate = new Date(
      year,
      month,
      date,
      this.lastDateTimeValue.getHours(),
      this.lastDateTimeValue.getMinutes(),
      this.lastDateTimeValue.getSeconds(),
      this.lastDateTimeValue.getMilliseconds()
    );

    return newDate;
  }
}
