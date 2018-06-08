import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AccountService } from '../../account/account.service';
import { AuthorizedPayer } from '../../account/models/authorized-payer';
import { AuthorizedPayersDialogComponent } from '../authorized-payers-dialog/authorized-payers-dialog.component';

@Component({
  selector: 'app-authorized-payers',
  templateUrl: './authorized-payers.component.html',
  styleUrls: ['./authorized-payers.component.scss']
})
export class AuthorizedPayersComponent implements OnInit {

  displayedColumns = ['name', 'startDate', 'endDate', 'email', 'dateCreated', 'changedBy', 'actions'];
  payers: MatTableDataSource<AuthorizedPayer>;
  error: string;

  constructor(private accountService: AccountService, private authPayersDialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef, public snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.payers = new MatTableDataSource( this.accountService.getAuthorizedPayers() );
    this.loadPayers();
  }

  openAuthorizedPayersDialog(payer?: AuthorizedPayer, action?: string) {

    const authPayerstDialogRef = this.authPayersDialog.open(AuthorizedPayersDialogComponent, {
      'panelClass': 'allDialogs',
      'minWidth': '360px',
      'maxWidth': '600px',
      'position': {'top': '100px'},
      'data': {'payer': payer, 'action': action}
    }).afterClosed().subscribe( result => {
      // show error message if present
      if (result) {
        this.snackBar.open(result, 'Dismiss', { duration: 5000 });
        console.log(result);
      }
      this.loadPayers();
      this.changeDetectorRefs.detectChanges();
    });

  }

  loadPayers() {
    this.accountService.getAuthorizedPayers()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          // set payers from response body
          const responses = [];
          resp.body.forEach(el => {
            responses.push(new AuthorizedPayer(el) );
          });
          this.payers = new MatTableDataSource( responses );
        },
        err => { this.error = err; }
        );
  }

}
