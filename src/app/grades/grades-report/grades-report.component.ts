import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GradesService } from '../../services/grades.service';

@Component({
  selector: 'app-grades-report',
  templateUrl: './grades-report.component.html',
  styleUrls: ['./grades-report.component.scss']
})
export class GradesReportComponent implements OnInit {

  gradeReportData: MatTableDataSource<any>;
  gradeReportDisplayedColumns = ['rowTitle', 'attemptedHours', 'earnedHours', 'qualityHours', 'qualityPoints', 'gpa'];
  error: string;

  constructor(private gradesService: GradesService) { }

  ngOnInit() {
    this.gradesService.getGradeReport()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          // set grades from response body
          this.gradeReportData = new MatTableDataSource(resp.body);
        },
        err => { this.error = err; }
        );
  }

}
