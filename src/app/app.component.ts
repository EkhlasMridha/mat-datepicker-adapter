import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date: string | Date = '2023-03-26T09:25:51.657';

  date1 = new FormControl(this.date);
  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.date = event.value ?? new Date();
  }
}
