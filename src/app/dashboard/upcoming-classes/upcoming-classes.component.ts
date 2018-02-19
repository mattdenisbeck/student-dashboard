import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-classes',
  templateUrl: './upcoming-classes.component.html',
  styleUrls: ['./upcoming-classes.component.scss']
})
export class UpcomingClassesComponent implements OnInit {
  upcomingClasses: {}[];
  constructor() { }

  ngOnInit() {
    this.upcomingClasses = Array(
      {
        'title' : 'Object Oriented Programming I',
        'number' : 'CSC 360',
        'location' : 'GH 334',
        'day' : 'Monday',
        'startTime' : '9:30 A.M.',
        'endTime' : '10:45 A.M.',
        'icon' : 'computer',
        'path' : 'schedule'
      },
      {
        'title' : 'Discrete Mathematics',
        'number' : 'MAT 358 ',
        'location' : 'MP 250',
        'day' : 'Monday',
        'startTime' : '1:00 P.M.',
        'endTime' : '2:15 P.M.',
        'icon' : 'multiline_chart',
        'path' : 'schedule'
      },
      {
        'title' : 'History of Western Europe',
        'number' : 'HIS 226 ',
        'location' : 'LAC 364',
        'day' : 'Tuesday',
        'startTime' : '10:00 A.M.',
        'endTime' : '11:15 A.M.',
        'icon' : 'public',
        'path' : 'schedule'
      }
    );
  }

}
