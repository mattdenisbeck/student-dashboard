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

}
