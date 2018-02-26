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
    this.events = [
      {
        start: new Date( this.viewDate.setHours(16, 0) ),
        end: new Date( this.viewDate.setHours(18, 0) ),
        title: 'CSC 360 - Object Oriented Programming I',
        color: {
          primary: 'black',
          secondary: '#fbc63c'
        },
        meta: {
          course: {
            'number': 'CSC 360',
            'title': 'Object Oriented Programming I',
            'location': 'GH 334',
            'days': ['Monday', 'Wednesday', 'Friday'],
            'day': '',
            'startTime': new Date('1970-01-01 09:30'),
            'endTime': new Date('1970-01-01 10:45'),
            'instructor': 'Jane Doe',
            'icon': 'computer'
          }
        }
      },
      {
        start: new Date( this.viewDate.setHours(15, 0) ),
        end: new Date( this.viewDate.setHours(15, 30) ),
        title: 'MAT 358 - Discrete Mathematics',
        color: {
          primary: 'black',
          secondary: '#FFC72C'
        },
        meta: {
          course: {
            'number': 'MAT 358',
            'title': 'Discrete Mathematics',
            'location': 'MP 250',
            'days': ['Monday', 'Wednesday', 'Friday'],
            'day': '',
            'startTime': new Date('1970-01-01 13:00'),
            'endTime': new Date('1970-01-01 14:15'),
            'instructor': 'John Doe',
            'icon': 'multiline_chart'
          }
        }
      },
      {
        start: new Date( this.viewDate.setHours(10, 0) ),
        end: new Date( this.viewDate.setHours(11, 0) ),
        title: 'HIS 226 - History of Western Europe',
        color: {
          primary: 'black',
          secondary: '#FFC72C'
        },
        meta: {
          course: {
            'number': 'HIS 226',
            'title': 'History of Western Europe',
            'location': 'LAC 364',
            'days': ['Tuesday', 'Thursday'],
            'day': '',
            'startTime': new Date('1970-01-01 10:00'),
            'endTime': new Date('1970-01-01 11:15'),
            'instructor': 'John Q. Professor',
            'icon': 'public'
          }
        }
      },
      {
        start: new Date( this.viewDate.setHours(13, 30) ),
        end: new Date( this.viewDate.setHours(14, 0) ),
        title: 'CSC 360 - Object Oriented Programming I',
        color: {
          primary: 'black',
          secondary: '#FFC72C'
        },
        meta: {
          course: {
            'number': 'CSC 360',
            'title': 'Object Oriented Programming I',
            'location': 'GH 334',
            'days': ['Monday', 'Wednesday', 'Friday'],
            'day': '',
            'startTime': new Date('1970-01-01 09:30'),
            'endTime': new Date('1970-01-01 10:45'),
            'instructor': 'Jane Doe',
            'icon': 'computer'
          }
        }
      },
      {
        start: new Date(this.tomorrow.setHours(12, 0)),
        end: new Date(this.tomorrow.setHours(14, 0)),
        title: 'MAT 358 - Discrete Mathematics',
        color: {
          primary: 'black',
          secondary: '#FFC72C'
        },
        meta: {
          course: {
            'number': 'MAT 358',
            'title': 'Discrete Mathematics',
            'location': 'MP 250',
            'days': ['Monday', 'Wednesday', 'Friday'],
            'day': '',
            'startTime': new Date('1970-01-01 13:00'),
            'endTime': new Date('1970-01-01 14:15'),
            'instructor': 'John Doe',
            'icon': 'multiline_chart'
          }
        }
      }
    ];
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
