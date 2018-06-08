import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AccountService } from '../../account/account.service';
import { BankAccount } from '../../account/models/bank-account';

@Component({
  selector: 'app-pay-bill-dialog',
  templateUrl: './pay-bill-dialog.component.html',
  styleUrls: ['./pay-bill-dialog.component.scss']
})
export class PayBillDialogComponent implements OnInit {

  paymentAmt: number;
  accounts: BankAccount[];
  paymentAccount: string;
  error: string;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PayBillDialogComponent>,
  private accountService: AccountService ) { }

  ngOnInit() {
    this.paymentAmt = this.data.paymentAmt;
    this.accountService.getBankAccounts()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);

          // set academic plan from response body
          this.accounts = resp.body;
        },
        err => { this.error = err; }
        );
  }

  onSubmit() {
    console.log('Making payment of ' + this.paymentAmt + ' from ' + this.paymentAccount);
    this.accountService.payBill(this.paymentAmt);
    this.dialogRef.close();
  }

}
