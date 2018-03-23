import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HoldsDialogComponent } from '../holds-dialog/holds-dialog.component';
import { HoldsService } from '../../services/holds.service';
import { AccountService } from '../../services/account.service';
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
  accountBalance: number;
  gpa: number;
  student: Student;

  constructor(public holdsDialog: MatDialog, public holdsService: HoldsService, private accountService: AccountService,
    private gradeService: GradesService, private studentInfoService: StudentInfoService) { }

  ngOnInit() {
    this.holdsCount = this.holdsService.getHolds().length;
    this.accountBalance = this.accountService.getBalance();
    this.gpa = this.gradeService.getGPA();
    this.student = this.studentInfoService.getStudent();
  }

  openHoldsDialog() {
    const holdsDialogRef = this.holdsDialog.open(HoldsDialogComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'position': {'top': '100px'}
    });
  }
}
