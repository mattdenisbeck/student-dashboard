import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AcademicPlanService } from '../../services/academic-plan.service';
import { SemesterPlan } from '../../models/semester-plan';
import { ClassModel } from '../../models/class-model';

@Component({
  selector: 'app-academic-plan-next-semester',
  templateUrl: './academic-plan-next-semester.component.html',
  styleUrls: ['./academic-plan-next-semester.component.scss']
})
export class AcademicPlanNextSemesterComponent implements OnInit {

  academicPlan: SemesterPlan;
  dataSource: MatTableDataSource<ClassModel>;
  displayedColumns = ['course', 'days', 'time', 'credit', 'status'];
  upcomingSemester: string;

  constructor(private academicPlanService: AcademicPlanService) { }

  ngOnInit() {
    this.academicPlan = this.academicPlanService.getNextSemesterPlan();
    this.dataSource = new MatTableDataSource( this.academicPlan.courses );
    this.upcomingSemester = this.academicPlan.semester;
  }

  abreviateDay(day: string, short: boolean) {
    switch (day) {
      case 'Monday':
        return short ? 'M' : 'Mon.';
      case 'Tuesday':
        return short ? 'T' : 'Tues.';
      case 'Wednesday':
        return short ? 'W' : 'Wed.';
      case 'Thursday':
        return short ? 'Th' : 'Thurs.';
      case 'Friday':
        return short ? 'F' : 'Fri.';
      case 'Saturday':
        return short ? 'Sat' : 'Sat.';
      case 'Sunday':
        return short ? 'Sun' : 'Sun.';
      default:
        return day;
    }
  }

}
