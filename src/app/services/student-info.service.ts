import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable()
export class StudentInfoService {

  private student: Student;

  constructor() {
    this.student = new Student( 'Nicholas Norse', 'norsen1@nku.edu', 'Junior', 'Computer Science', 'Bachelor of Science',
    'College of Informatics', new Date('11/1/2018'), new Date('12/1/2018'));
  }

  getStudent() {
    return this.student;
  }

}
