import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallApiService } from './call-api.service';

@Injectable()
export class GradesService {

  private gpa: number;
  private majorGPA: number;

  constructor(private callApiService: CallApiService) {
    this.gpa = 3.78;
    this.majorGPA = 3.9;
  }

  getGrades(semester: string, final: boolean): Observable<HttpResponse<any>> {
    // use semester parameter to perform back-end query
    const resource = final ? 'finalGrades' : 'midtermGrades';
    const name = final ? 'Final Grades' : 'Midterm Grades';
    return this.callApiService.get('api/' + resource, name);
  }

  // returns latest available grade data
  // To Do: update implementation once backend service is available
  getLatestGrades(): Observable<HttpResponse<any>> {
    return this.callApiService.get('api/latestGrades', 'Latest Grades');
  }

  getGradeReport(): Observable<HttpResponse<any>> {
    return this.callApiService.get('api/gradeReport', 'Grade Report');
  }

  getCourseGrades(): Observable<HttpResponse<any>> {
    return this.callApiService.get('api/courseGrades', 'Course Grades');
  }

  getGPA() {
    return this.gpa;
  }

  getMajorGPA() {
    return this.majorGPA;
  }

}
