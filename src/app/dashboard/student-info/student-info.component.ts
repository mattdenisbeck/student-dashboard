import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../../services/student-info.service';
import { Student } from '../../models/student';
import { AdvisorsService } from '../../services/advisors.service';
import { AdvisorModel } from '../../models/advisor-model';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

  student: Student;
  advisors: AdvisorModel[];

  constructor(private studentInfoService: StudentInfoService, private advisorsService: AdvisorsService) { }

  ngOnInit() {
    this.student = this.studentInfoService.getStudent();
    this.advisorsService.getAdvisors()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);

          // set advisors from response body
          this.advisors = resp.body;
        });
  }

}
