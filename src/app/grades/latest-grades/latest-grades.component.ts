import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../services/grades.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-latest-grades',
  templateUrl: './latest-grades.component.html',
  styleUrls: ['./latest-grades.component.scss']
})
export class LatestGradesComponent implements OnInit {

  latestGrades: MatTableDataSource<any>;
  overallGPA: number;
  majorGPA: number;
  displayedColumns = ['course', 'grade'];
  error: string;

  constructor(private gradesService: GradesService) { }

  ngOnInit() {
    this.overallGPA = this.gradesService.getGPA();
    this.majorGPA = this.gradesService.getMajorGPA();
    this.gradesService.getLatestGrades()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          // set grades from response body
          this.latestGrades = new MatTableDataSource(resp.body);
        },
        err => { this.error = err; }
        );
  }

}
