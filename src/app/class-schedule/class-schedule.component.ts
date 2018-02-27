import { Component, OnInit } from '@angular/core';
import { ClassScheduleService } from '../services/class-schedule.service';
import { ClassModel } from '../models/class-model';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { MatDialog, MatTabChangeEvent } from '@angular/material';
import { CalendarEvent } from 'calendar-utils';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.scss']
})

export class ClassScheduleComponent implements OnInit {

  classes: ClassModel[];
  view: string;
  semester: string;
  viewDate: Date = new Date(Date.now());
  tomorrow: Date = new Date();
  events: CalendarEvent[];
  earlyClass: number;
  lateClass: number;
  title: string;

  constructor(private classScheduleService: ClassScheduleService) { }

  ngOnInit() {
    this.classes = this.classScheduleService.getClasses();
    this.view = 'list';
    this.title = 'List View';
    this.tomorrow.setDate(this.viewDate.getDate() + 1);
    this.semester = 'Spring 2018';
    this.events = this.classScheduleService.getScheduleEvents();
  }

  onSelectTab(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.view = 'list';
        this.title = 'List View';
        break;
      case 1:
        this.view = 'day';
        this.title = 'Daily View';
        break;
      case 2:
        this.view = 'week';
        this.title = 'Weekly View';
        break;
      case 3:
        this.view = 'month';
        this.title = 'Monthly View';
        break;
      default:
        this.view = 'list';
        this.title = 'List View';
    }
  }

}
