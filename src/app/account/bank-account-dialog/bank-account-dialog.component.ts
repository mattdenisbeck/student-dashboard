import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BankAccount } from '../../models/bank-account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-bank-account-dialog',
  templateUrl: './bank-account-dialog.component.html',
  styleUrls: ['./bank-account-dialog.component.scss']
})
export class BankAccountDialogComponent implements OnInit {

  account: BankAccount;
  action: string;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<BankAccountDialogComponent>,
    private accountService: AccountService ) { }

  ngOnInit() {
    if (this.data.action === 'delete') {
      this.action = 'Delete';
    } else if (this.data.account) {
      this.action = 'Edit';
    } else {
      this.action = 'Add';
    }
    if (this.data.account) {
      this.account = new BankAccount(this.data.account.id, this.data.account.nickname, this.data.account.isRefund, this.data.account.holder,
        this.data.account.routing, this.data.account.bank, this.data.account.number);
    } else {
      this.account = new BankAccount();
    }
  }

  onSubmit() {
    switch (this.action) {
      case 'Delete':
        this.accountService.deleteAccount(this.account)
          .subscribe(
            resp => { this.dialogRef.close(); },
            err => { this.dialogRef.close(err); }
          );
        break;
      case 'Add':
        this.accountService.addAccount(this.account)
          .subscribe(
            resp => { this.dialogRef.close(); },
            err => { this.dialogRef.close(err); }
          );
        break;
      case 'Edit':
        this.accountService.editAccount(this.account)
          .subscribe(
            resp => { this.dialogRef.close(); },
            err => { this.dialogRef.close(err); }
          );
        break;
      default:
        this.dialogRef.close();
    }
  }

}
