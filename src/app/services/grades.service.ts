import { Injectable } from '@angular/core';

@Injectable()
export class GradesService {

  private finalGrades: {}[];
  private midtermGrades: {}[];
  private gradeReport: {}[];

  constructor() {
    this.finalGrades = [
      {
        courseNumber: 'CSC 360',
        courseSection: '001',
        courseTitle: 'Object Oriented Programming I',
        grade: 'A-',
        attemptedHours: 3.0,
        earnedHours: 3.0,
        qualityHours: 3.0,
        qualityPoints: 12.0
      },
      {
        courseNumber: 'MAT 358',
        courseSection: '001',
        courseTitle: 'Discrete Mathematics',
        grade: 'B',
        attemptedHours: 3.0,
        earnedHours: 3.0,
        qualityHours: 3.0,
        qualityPoints: 12.0
      },
      {
        courseNumber: 'HIS 226',
        courseSection: '002',
        courseTitle: 'History of Western Europe',
        grade: 'A',
        attemptedHours: 3.0,
        earnedHours: 3.0,
        qualityHours: 3.0,
        qualityPoints: 12.0
      }
    ];
    this.midtermGrades = [
      {
        courseNumber: 'CSC 360',
        courseSection: '001',
        courseTitle: 'Object Oriented Programming I',
        grade: 'B+',
        attemptedHours: 3.0,
        earnedHours: 3.0,
        qualityHours: 3.0,
        qualityPoints: 12.0
      },
      {
        courseNumber: 'MAT 358',
        courseSection: '001',
        courseTitle: 'Discrete Mathematics',
        grade: 'C',
        attemptedHours: 3.0,
        earnedHours: 3.0,
        qualityHours: 3.0,
        qualityPoints: 12.0
      },
      {
        courseNumber: 'HIS 226',
        courseSection: '002',
        courseTitle: 'History of Western Europe',
        grade: 'A-',
        attemptedHours: 3.0,
        earnedHours: 3.0,
        qualityHours: 3.0,
        qualityPoints: 12.0
      }
    ];
    this.gradeReport = [
      {
        title: 'Current Term',
        attemptedHours: 12.0,
        earnedHours: 12.0,
        qualityHours: 12.0,
        qualityPoints: 48.0,
        gpa: 4.0
      },
      {
        title: 'Cumulative',
        attemptedHours: 45.0,
        earnedHours: 45.0,
        qualityHours: 45.0,
        qualityPoints: 168.0,
        gpa: 3.74
      }
    ];
   }

  getGrades(semester: string, final: boolean) {
    // use semester parameter to perform back-end query
    return final ? this.finalGrades : this.midtermGrades;
  }

  getGradeReport() {
    return this.gradeReport;
  }

}