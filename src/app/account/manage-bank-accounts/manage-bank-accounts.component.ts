import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
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

  constructor(private accountService: AccountService, public bankAccountDialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.accounts = new MatTableDataSource( this.accountService.getBankAccounts() );
  }

  openBankAccountDialog(account?: BankAccount, action?: string) {

    const bankAccountDialogRef = this.bankAccountDialog.open(BankAccountDialogComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'maxWidth': '600px',
      'position': {'top': '100px'},
      'data': {'account': account, 'action': action}
    }).afterClosed().subscribe( result => {
      this.accounts = new MatTableDataSource( this.accountService.getBankAccounts() );
      this.changeDetectorRefs.detectChanges();
    });
  }

}
