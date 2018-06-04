import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassModel } from '../models/class-model';
import { CallApiService } from './call-api.service';
import { CalendarEvent } from 'calendar-utils';

@Injectable()
export class ClassScheduleService {

  private classes: ClassModel[];
  private today = new Date( Date.now() );
  private tomorrow = new Date();

  constructor(private callApiService: CallApiService) {
    this.tomorrow.setDate(this.today.getDate() + 1);
  }

  getClasses(): Observable<HttpResponse<ClassModel[]>> {
    return this.callApiService.get('api/classes', 'Class Schedule');
  }

  getUpcomingClasses(howMany: number, schedule: ClassModel[]) {
    const dayOfWeek = this.today.getDay();
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
      for ( let j = 0; j < schedule.length; j++ ) {
        if (schedule[j].days.indexOf(day) >= 0) {
          const course: ClassModel = Object.assign({}, schedule[j]);
          course.day = day;
          if ( (day === week[0] && course.startTime.getHours() > this.today.getHours()) || (day !== week[0]) ) {
            upcoming.push(course);
          }
        }
      }
    }
    return upcoming.slice(0, howMany);
  }

  getScheduleEvents(): Observable<HttpResponse<CalendarEvent[]>> {
    return this.callApiService.get('api/scheduleEvents', 'Class Schedule');
  }

}
