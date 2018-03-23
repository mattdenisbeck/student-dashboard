import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AccountService } from '../../services/account.service';
import { BankAccount } from '../../models/bank-account';

@Component({
  selector: 'app-pay-bill-dialog',
  templateUrl: './pay-bill-dialog.component.html',
  styleUrls: ['./pay-bill-dialog.component.scss']
})
export class PayBillDialogComponent implements OnInit {

  paymentAmt: number;
  accounts: BankAccount[];
  paymentAccount: string;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PayBillDialogComponent>,
  private accountService: AccountService ) { }

  ngOnInit() {
    this.paymentAmt = this.data.paymentAmt;
    this.accounts = this.accountService.getBankAccounts();
  }

  onSubmit() {
    console.log('Making payment of ' + this.paymentAmt + ' from ' + this.paymentAccount);
    this.accountService.payBill(this.paymentAmt);
    this.dialogRef.close();
  }

}
