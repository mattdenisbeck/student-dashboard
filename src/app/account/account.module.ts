import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { MatCardModule, MatInputModule, MatRadioModule, MatButtonModule, MatSelectModule, MatIconModule,
  MatDividerModule, MatTooltipModule, MatTableModule, MatDialogModule, MatCheckboxModule, MatDatepickerModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StatementComponent } from './statement/statement.component';
import { ManageBankAccountsComponent } from './manage-bank-accounts/manage-bank-accounts.component';
import { AuthorizedPayersComponent } from './authorized-payers/authorized-payers.component';
import { BankAccountDialogComponent } from './bank-account-dialog/bank-account-dialog.component';
import { AuthorizedPayersDialogComponent } from './authorized-payers-dialog/authorized-payers-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule
  ],
  declarations: [
    AccountComponent,
    StatementComponent,
    ManageBankAccountsComponent,
    AuthorizedPayersComponent,
    BankAccountDialogComponent,
    AuthorizedPayersDialogComponent,
  ],
  entryComponents: [
    BankAccountDialogComponent,
    AuthorizedPayersDialogComponent,
  ]
})
export class AccountModule { }
