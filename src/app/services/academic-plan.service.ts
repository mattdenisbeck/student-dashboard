import { Injectable } from '@angular/core';
import { AcademicPlanModel } from '../models/academic-plan-model';
import { SemesterPlan } from '../models/semester-plan';
import { ClassModel } from '../models/class-model';

@Injectable()
export class AcademicPlanService {

  private academicPlan: AcademicPlanModel;

  constructor() {
    this.academicPlan = new AcademicPlanModel(
      [
        new SemesterPlan(
          'Fall 2018-2019',
          [
            new ClassModel('CSC 361', 'Object Oriented Programming II', 'GH 330', ['Monday', 'Wednesday', 'Friday'],
            '', new Date('1970-01-01 09:00'), new Date('1970-01-01 09:50'), 'Some instructor', 'computer', 3, 'Planned (Student)', '001'),
            new ClassModel('HIS 230', 'History of Eastern Europe', 'LAC 364', ['Tuesday', 'Thursday'],
            '', new Date('1970-01-01 10:00'), new Date('1970-01-01 11:15'), 'Some instructor', 'public', 3, 'Planned (Student)', '001'),
            new ClassModel('CSC 364', 'Data Structures & Algorithms', 'GH 314', ['Tuesday', 'Thursday'],
            '', new Date('1970-01-01 09:25'), new Date('1970-01-01 10:40'), 'Some instructor', 'computer', 3, 'Planned (Student)', '001'),
          ]
        ),
        new SemesterPlan(
          'Spring 2017-2018',
          [
            new ClassModel('CSC 361', 'Object Oriented Programming II', 'GH 330', ['Monday', 'Wednesday', 'Friday'],
            '', new Date('1970-01-01 09:00'), new Date('1970-01-01 09:50'), 'Some instructor', 'computer', 3, 'Planned (Student)', '001'),
            new ClassModel('HIS 230', 'History of Eastern Europe', 'LAC 364', ['Tuesday', 'Thursday'],
            '', new Date('1970-01-01 10:00'), new Date('1970-01-01 11:15'), 'Some instructor', 'public', 3, 'Planned (Student)', '001'),
            new ClassModel('CSC 364', 'Data Structures & Algorithms', 'GH 314', ['Tuesday', 'Thursday'],
            '', new Date('1970-01-01 09:25'), new Date('1970-01-01 10:40'), 'Some instructor', 'computer', 3, 'Planned (Student)', '001'),
          ]
        )
      ], new Date(Date.now()));
  }

  getFullPlan() {
    return this.academicPlan;
  }

  getNextSemesterPlan() {
    return this.academicPlan.semesterPlan[0];
  }

}
