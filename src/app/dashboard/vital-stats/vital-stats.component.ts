import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HoldsDialogComponent } from '../holds-dialog/holds-dialog.component';
import { HoldsService } from '../../services/holds.service';
import { AccountService } from '../../account/account.service';
import { GradesService } from '../../services/grades.service';
import { Student } from '../../models/student';
import { StudentInfoService } from '../../services/student-info.service';

@Component({
  selector: 'app-vital-stats',
  templateUrl: './vital-stats.component.html',
  styleUrls: ['./vital-stats.component.scss']
})
export class VitalStatsComponent implements OnInit {

  holdsCount: number;
  holds: any;
  accountBalance: number;
  gpa: number;
  student: Student;
  errors = {};

  constructor(public holdsDialog: MatDialog, public holdsService: HoldsService, private accountService: AccountService,
    private gradeService: GradesService, private studentInfoService: StudentInfoService) { }

  ngOnInit() {
    this.holdsService.getHolds()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);

          // set advisors from response body
          this.holds = resp.body;
          this.holdsCount = this.holds.length;
        },
        err => {
          this.errors['holds'] = err;
          this.holds = [];
        }
        );

    this.accountBalance = this.accountService.getBalance();
    this.gpa = this.gradeService.getGPA();
    this.student = this.studentInfoService.getStudent();
  }

  openHoldsDialog() {
    const holdsDialogRef = this.holdsDialog.open(HoldsDialogComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'position': {'top': '100px'},
      data : {
          errors : this.errors,
          holds : this.holds
        }
    });
  }
}
