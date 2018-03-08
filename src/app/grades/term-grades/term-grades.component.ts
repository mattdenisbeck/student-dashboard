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
  dataSource: MatTableDataSource<{}>;
  midtermGrades: MatTableDataSource<{}>;
  finalGrades: MatTableDataSource<{}>;
  selectedTerm: string;
  selectedSemester: string;
  terms = ['Final Grades', 'Midterm Grades'];
  semesters = ['Spring 2017-2018', 'Fall 2018-2019', 'Spring 2018-2019'];

  constructor(private gradesService: GradesService) { }

  ngOnInit() {
    this.finalGrades = new MatTableDataSource(this.gradesService.getGrades('spring', true));
    this.midtermGrades = new MatTableDataSource(this.gradesService.getGrades('spring', false));
    this.dataSource = this.finalGrades;
    this.selectedTerm = this.terms[0];
    this.selectedSemester = this.semesters[0];
  }

  changeSemester(event: MatSelectChange) {
    console.log(event);
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
