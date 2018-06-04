import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { MatCardModule, MatInputModule, MatRadioModule, MatButtonModule, MatSelectModule, MatIconModule,
  MatDividerModule, MatTooltipModule, MatTableModule, MatDialogModule, MatCheckboxModule, MatDatepickerModule,
  MatProgressBarModule, MatSnackBarModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StatementComponent } from './statement/statement.component';
import { ManageBankAccountsComponent } from './manage-bank-accounts/manage-bank-accounts.component';
import { AuthorizedPayersComponent } from './authorized-payers/authorized-payers.component';
import { BankAccountDialogComponent } from './bank-account-dialog/bank-account-dialog.component';
import { AuthorizedPayersDialogComponent } from './authorized-payers-dialog/authorized-payers-dialog.component';
import { PayBillDialogComponent } from './pay-bill-dialog/pay-bill-dialog.component';
import { AllCardBalanceComponent } from './all-card-balance/all-card-balance.component';
import { TuitionBalanceComponent } from './tuition-balance/tuition-balance.component';
import { AppRoutingModule } from '../app-routing.module';

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
    MatDatepickerModule,
    MatRadioModule,
    MatProgressBarModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  declarations: [
    AccountComponent,
    StatementComponent,
    ManageBankAccountsComponent,
    AuthorizedPayersComponent,
    BankAccountDialogComponent,
    AuthorizedPayersDialogComponent,
    PayBillDialogComponent,
    AllCardBalanceComponent,
    TuitionBalanceComponent,
  ],
  entryComponents: [
    BankAccountDialogComponent,
    AuthorizedPayersDialogComponent,
    PayBillDialogComponent,
  ],
  exports: [
    ManageBankAccountsComponent,
    AuthorizedPayersComponent,
    AllCardBalanceComponent,
    TuitionBalanceComponent
  ]
})
export class AccountModule { }
