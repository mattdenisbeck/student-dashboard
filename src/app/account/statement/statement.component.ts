import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

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

  constructor(private accountService: AccountService) { }

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

}
