import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../services/grades.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-latest-grades',
  templateUrl: './latest-grades.component.html',
  styleUrls: ['./latest-grades.component.scss']
})
export class LatestGradesComponent implements OnInit {

  latestGrades: MatTableDataSource<{}>;
  overallGPA: number;
  majorGPA: number;
  displayedColumns = ['course', 'grade'];

  constructor(private gradesService: GradesService) { }

  ngOnInit() {
    this.overallGPA = this.gradesService.getGPA();
    this.majorGPA = this.gradesService.getMajorGPA();
    this.latestGrades = new MatTableDataSource(this.gradesService.getLatestGrades());
  }

}
