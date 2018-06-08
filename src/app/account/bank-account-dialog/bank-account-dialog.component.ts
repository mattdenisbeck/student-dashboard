import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BankAccount } from '../../account/models/bank-account';
import { AccountService } from '../../account/account.service';

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
      this.account = new BankAccount(this.data.account);
    } else if (this.data.account) {
      this.action = 'Edit';
      this.account = new BankAccount(this.data.account);
    } else {
      this.action = 'Add';
      this.account = new BankAccount();
    }
  }

  onSubmit() {
    switch (this.action) {
      case 'Delete':
        this.accountService.deleteAccount(this.account)
          .subscribe(
            resp => { this.dialogRef.close(resp); },
            err => { this.dialogRef.close(err); }
          );
        break;
      case 'Add':
        this.accountService.addAccount(this.account)
          .subscribe(
            resp => { this.dialogRef.close(resp); },
            err => { this.dialogRef.close(err); }
          );
        break;
      case 'Edit':
        this.accountService.editAccount(this.account)
          .subscribe(
            resp => { this.dialogRef.close(resp); },
            err => { this.dialogRef.close(err); }
          );
        break;
      default:
        this.dialogRef.close();
    }
  }

}
