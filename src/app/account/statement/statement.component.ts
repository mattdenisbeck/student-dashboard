import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AccountService } from '../../account/account.service';
import { MatDialog } from '@angular/material';
import { PayBillDialogComponent } from '../pay-bill-dialog/pay-bill-dialog.component';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  balance: number;
  paymentType: string;
  paymentAmt: number;
  semesters: string[];
  taxYears: string[];

  constructor(private accountService: AccountService, public payBillDialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.balance = this.accountService.getBalance();
    this.paymentType = 'full';
    this.paymentAmt = this.balance;
    this.semesters = ['Fall 2016-2017', 'Spring 2016-2017', 'Fall 2017-2018', 'Spring 2017-2018'];
    this.taxYears = ['2016', '2017', '2018'];
  }

  onPaymentTypeChange(selection: string) {
    this.paymentType = selection;
    if (this.paymentType === 'full') {
      this.paymentAmt = this.balance;
    } else {
      this.paymentAmt = 0;
    }
  }

  openPayBillDialog() {

    const payBillDialogRef = this.payBillDialog.open(PayBillDialogComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'maxWidth': '600px',
      'position': {'top': '100px'},
      'data': {'paymentAmt': this.paymentAmt}
    }).afterClosed().subscribe( result => {
      this.balance = parseFloat(this.accountService.getBalance().toFixed(2));
      this.paymentAmt = parseFloat(this.balance.toFixed(2));
      this.paymentType = 'full';
      this.changeDetectorRefs.detectChanges();
    });

  }

}
