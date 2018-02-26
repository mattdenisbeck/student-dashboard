import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { ClassDetailComponent } from '../class-detail/class-detail.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-daily-view',
  templateUrl: './daily-view.component.html',
  styleUrls: ['./daily-view.component.scss']
})
export class DailyViewComponent implements OnInit {
  @Input() viewDate: Date;
  @Input() events: CalendarEvent[];
  @Input() view: string;
  @Input() title: string;
  earlyClass: number;
  lateClass: number;

  constructor(public classDetailDialog: MatDialog) { }

  ngOnInit() {
    this.earlyClass = 10;
    this.lateClass = 18;
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
}
