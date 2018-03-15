import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AccountService } from '../../services/account.service';
import { AuthorizedPayer } from '../../models/authorized-payer';
import { AuthorizedPayersDialogComponent } from '../authorized-payers-dialog/authorized-payers-dialog.component';

@Component({
  selector: 'app-authorized-payers',
  templateUrl: './authorized-payers.component.html',
  styleUrls: ['./authorized-payers.component.scss']
})
export class AuthorizedPayersComponent implements OnInit {

  displayedColumns = ['name', 'startDate', 'endDate', 'email', 'dateCreated', 'changedBy', 'actions'];
  payers: MatTableDataSource<AuthorizedPayer>;

  constructor(private accountService: AccountService, private authPayersDialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.payers = new MatTableDataSource( this.accountService.getAuthorizedPayers() );
  }

  openAuthorizedPayersDialog(payer?: AuthorizedPayer, action?: string) {

    const authPayerstDialogRef = this.authPayersDialog.open(AuthorizedPayersDialogComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'maxWidth': '600px',
      'position': {'top': '100px'},
      'data': {'payer': payer, 'action': action}
    }).afterClosed().subscribe( result => {
      this.payers = new MatTableDataSource( this.accountService.getAuthorizedPayers() );
      this.changeDetectorRefs.detectChanges();
    });

  }

}
