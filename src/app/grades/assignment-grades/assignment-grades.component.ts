import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../services/grades.service';

@Component({
  selector: 'app-assignment-grades',
  templateUrl: './assignment-grades.component.html',
  styleUrls: ['./assignment-grades.component.scss']
})
export class AssignmentGradesComponent implements OnInit {

  courseGrades: {}[];
  error: string;
  constructor(private gradesService: GradesService) { }

  ngOnInit() {
    this.gradesService.getCourseGrades()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          // set grades from response body
          this.courseGrades = resp.body;
        },
        err => { this.error = err; }
        );
  }

}
