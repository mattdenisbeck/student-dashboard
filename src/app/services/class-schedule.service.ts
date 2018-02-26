import { Injectable } from '@angular/core';
import { ClassModel } from '../models/class-model';

@Injectable()
export class ClassScheduleService {

  private classes: ClassModel[];

  constructor() {
    this.classes = [
      {
        'number': 'CSC 360',
        'title': 'Object Oriented Programming I',
        'location': 'GH 334',
        'days': ['Monday', 'Wednesday', 'Friday'],
        'day': '',
        'startTime': new Date('1970-01-01 09:30'),
        'endTime': new Date('1970-01-01 10:45'),
        'instructor': 'Jane Doe',
        'icon': 'computer'
      },
      {
        'number': 'MAT 358',
        'title': 'Discrete Mathematics',
        'location': 'MP 250',
        'days': ['Monday', 'Wednesday', 'Friday'],
        'day': '',
        'startTime': new Date('1970-01-01 13:00'),
        'endTime': new Date('1970-01-01 14:15'),
        'instructor': 'John Doe',
        'icon': 'multiline_chart'
      },
      {
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
    ];
  }

  getClasses() {
    return this.classes;
  }

  getUpcomingClasses(howMany: number) {
    const today = new Date( Date.now() );
    const dayOfWeek = today.getDay();
    let week: string[];
    const upcoming: ClassModel[] = [];
    switch (dayOfWeek) {
      case 0:
        week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        break;
      case 1:
        week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        break;
      case 2:
        week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
        break;
      case 3:
        week = ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'];
        break;
      case 4:
        week = ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
        break;
      case 5:
        week = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
        break;
      case 6:
        week = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        break;
    }
    for ( let i = 0; i < week.length; i++ ) {
      const day = week[i];
      for ( let j = 0; j < this.classes.length; j++ ) {
        if (this.classes[j].days.indexOf(day) >= 0) {
          const course: ClassModel = Object.assign({}, this.classes[j]);
          course.day = day;
          if ( (day === week[0] && course.startTime.getHours() > today.getHours()) || (day !== week[0]) ) {
            upcoming.push(course);
          }
        }
      }
    }
    return upcoming.slice(0, howMany);
  }

}
