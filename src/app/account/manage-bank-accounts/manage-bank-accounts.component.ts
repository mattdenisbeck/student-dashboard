import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { BankAccount } from '../../models/bank-account';
import { AccountService } from '../../services/account.service';
import { BankAccountDialogComponent } from '../bank-account-dialog/bank-account-dialog.component';

@Component({
  selector: 'app-manage-bank-accounts',
  templateUrl: './manage-bank-accounts.component.html',
  styleUrls: ['./manage-bank-accounts.component.scss']
})
export class ManageBankAccountsComponent implements OnInit {

  displayedColumns = ['nickname', 'holder', 'routing', 'bank', 'number', 'actions'];
  accounts: MatTableDataSource<BankAccount>;
  error: string;

  constructor(private accountService: AccountService, public bankAccountDialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadAccounts();
  }

  openBankAccountDialog(account?: BankAccount, action?: string) {

    const bankAccountDialogRef = this.bankAccountDialog.open(BankAccountDialogComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'maxWidth': '600px',
      'position': {'top': '100px'},
      'data': {'account': account, 'action': action}
    }).afterClosed().subscribe( result => {
      // show error message if present
      if (result) {
        this.snackBar.open(result, 'Dismiss', { duration: 5000 });
        console.log(result);
      }
      this.loadAccounts();
      this.changeDetectorRefs.detectChanges();
    });
  }

  private loadAccounts() {
    this.accountService.getBankAccounts()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);

          // set academic plan from response body
          this.accounts = new MatTableDataSource( resp.body );
        },
        err => { this.error = err; }
        );
  }

}
