import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment-timezone';

const moment = _rollupMoment || _moment;

@Pipe({
  name: 'dateFormate'
})
export class DateFormatePipe implements PipeTransform {

  transform(date: string | Date, timeFormat: string = ''):string | null {
    const defaultValues = {
      dateFormat: 'dd-MM-yyyy hh:mm a',
      language: 'en-US',
      canonicalName: 'US/Central',
    };
    const userPrefs = defaultValues;

    const timeZoneOffset = moment(new Date(date))
      .tz(defaultValues.canonicalName)
      .format('Z');

    const datePipe = new DatePipe(userPrefs.language);

    const dateFormat = timeFormat
      ? `${userPrefs.dateFormat}  ${timeFormat}`
      : userPrefs.dateFormat;

    let resultDate = datePipe.transform(
      date+'Z',
      dateFormat,
      timeZoneOffset,
      userPrefs.language
    );

    return resultDate;
  }
}
