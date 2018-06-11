import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AccountService } from '../../account/account.service';
import { AuthorizedPayer } from '../../account/models/authorized-payer';

@Component({
  selector: 'app-authorized-payers-dialog',
  templateUrl: './authorized-payers-dialog.component.html',
  styleUrls: ['./authorized-payers-dialog.component.scss']
})
export class AuthorizedPayersDialogComponent implements OnInit {

  payer: AuthorizedPayer;
  action: string;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AuthorizedPayersDialogComponent>,
  private accountService: AccountService ) { }

  ngOnInit() {
    if (this.data.action === 'delete') {
      this.action = 'Delete';
    } else if (this.data.payer) {
      this.action = 'Edit';
    } else {
      this.action = 'Add';
    }
    if (this.data.payer) {
      this.payer = new AuthorizedPayer(this.data.payer);
    } else {
      this.payer = new AuthorizedPayer();
    }
  }

  onSubmit() {
    switch (this.action) {
      case 'Delete':
        this.accountService.deletePayer(this.payer)
          .subscribe(
            resp => { this.dialogRef.close(); },
            err => { this.dialogRef.close(err); }
          );
        break;
      case 'Add':
        this.payer.dateCreated = new Date( Date.now() );
        this.payer.changedBy = 'Generic User';
        this.accountService.addPayer(this.payer)
          .subscribe(
            resp => { this.dialogRef.close(); },
            err => { this.dialogRef.close(err); }
          );
        break;
      case 'Edit':
        this.accountService.editPayer(this.payer)
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
