import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { ClassDetailComponent } from '../class-detail/class-detail.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-weekly-view',
  templateUrl: './weekly-view.component.html',
  styleUrls: ['./weekly-view.component.scss']
})
export class WeeklyViewComponent implements OnInit {
  @Input() viewDate: Date;
  @Input() events: CalendarEvent[];
  @Input() view: string;
  @Input() title: string;

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

}
