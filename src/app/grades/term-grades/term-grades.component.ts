import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSelectChange } from '@angular/material';
import { GradesService } from '../../services/grades.service';

@Component({
  selector: 'app-term-grades',
  templateUrl: './term-grades.component.html',
  styleUrls: ['./term-grades.component.scss']
})
export class TermGradesComponent implements OnInit {
  displayedColumns = ['course', 'grade', 'attemptedHours', 'earnedHours', 'qualityHours', 'qualityPoints'];
  dataSource: MatTableDataSource<any>;
  midtermGrades: MatTableDataSource<any>;
  finalGrades: MatTableDataSource<any>;
  selectedTerm: string;
  selectedSemester: string;
  terms = ['Final Grades', 'Midterm Grades'];
  semesters = ['Spring 2017-2018', 'Fall 2018-2019', 'Spring 2018-2019'];
  errors = {};

  constructor(private gradesService: GradesService) { }

  ngOnInit() {
    // get final grades
    this.gradesService.getGrades('spring', true)
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          // set grades from response body
          this.finalGrades = new MatTableDataSource(resp.body);
          this.dataSource = this.finalGrades;
        },
        err => { this.errors['Final Grades'] = err; console.log(this.errors); }
      );
    // get midterm grades
    this.gradesService.getGrades('spring', false)
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          // set grades from response body
          this.midtermGrades = new MatTableDataSource(resp.body);
        },
        err => { this.errors['Midterm Grades'] = err; }
      );
    this.selectedTerm = this.terms[0];
    this.selectedSemester = this.semesters[0];
  }

  changeSemester(event: MatSelectChange) {
    // placeholder
  }

  changeTerm(event: MatSelectChange) {
    switch (event.value) {
      case 'Midterm Grades':
        this.dataSource = this.midtermGrades;
        break;
      case 'Final Grades':
        this.dataSource = this.finalGrades;
        break;
      default:
        this.dataSource = this.finalGrades;
    }
  }

}
