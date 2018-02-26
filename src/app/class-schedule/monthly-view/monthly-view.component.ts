import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { ClassDetailComponent } from '../class-detail/class-detail.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-monthly-view',
  templateUrl: './monthly-view.component.html',
  styleUrls: ['./monthly-view.component.scss']
})
export class MonthlyViewComponent implements OnInit {
  @Input() viewDate: Date;
  @Input() events: CalendarEvent[];
  @Input() view: string;
  @Input() title: string;
  activeDayIsOpen = true;
  constructor(public classDetailDialog: MatDialog) { }

  ngOnInit() {
  }

  viewDateChange(date: Date) {
    this.viewDate = date;
  }

  eventClicked(event: CalendarEvent) {
    const classDetailDialogRef = this.classDetailDialog.open(ClassDetailComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'maxWidth': '500px',
      'position': {'top': '100px'},
      'data': event.meta.course
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;
  }

}
