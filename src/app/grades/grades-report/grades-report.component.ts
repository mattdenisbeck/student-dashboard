import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GradesService } from '../../services/grades.service';

@Component({
  selector: 'app-grades-report',
  templateUrl: './grades-report.component.html',
  styleUrls: ['./grades-report.component.scss']
})
export class GradesReportComponent implements OnInit {

  gradeReportData: MatTableDataSource<{}>;
  gradeReportDisplayedColumns = ['rowTitle', 'attemptedHours', 'earnedHours', 'qualityHours', 'qualityPoints', 'gpa'];


  constructor(private gradesService: GradesService) { }

  ngOnInit() {
    this.gradeReportData = new MatTableDataSource(this.gradesService.getGradeReport());
  }

}
