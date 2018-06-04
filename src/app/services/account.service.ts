import { Injectable } from '@angular/core';
import { BankAccount } from '../models/bank-account';
import { AuthorizedPayer } from '../models/authorized-payer';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallApiService } from './call-api.service';

@Injectable()
export class AccountService {

  private apiURL = 'assets/mockAPI/account/';

  private bankAccounts: BankAccount[];
  private balance: number;
  authorizedPayers: AuthorizedPayer[];

  constructor(private callApiService: CallApiService) {
    this.bankAccounts = [
      new BankAccount(1, 'My Checking', true, 'Nicholas Norse', 483620868, 'US Bank', 184734750),
      new BankAccount(2, 'Parents\' Checking', false, 'Nellie Norse', 648635294, '5/3 Bank', 236184590)
    ];
    this.balance = 2500.99;
  }

  getBankAccounts(): Observable<HttpResponse<BankAccount[]>> {
    return this.callApiService.get('api/accounts', 'Bank Accounts');
  }

  getBalance() {
    return this.balance;
  }

  getAuthorizedPayers(): Observable<HttpResponse<AuthorizedPayer[]>> {
    return this.callApiService.get('api/payers', 'Authorized Payers');
  }

  addAccount(newAccount: BankAccount) {
    return this.callApiService.post('api/accounts', 'Bank Accounts', newAccount);
  }

  deleteAccount(account: BankAccount) {
    return this.callApiService.delete('api/accounts', 'Bank Accounts', account.id);
  }

  editAccount(newAccount: BankAccount) {
    return this.callApiService.put('api/accounts', 'Bank Accounts', newAccount);
  }

  addPayer(newPayer: AuthorizedPayer) {
    return this.callApiService.post('api/payers', 'Authorized Payers', newPayer);
  }

  deletePayer(payer: AuthorizedPayer) {
    return this.callApiService.delete('api/payers', 'Authorized Payers', payer.id);
  }

  editPayer(newPayer: AuthorizedPayer) {
    return this.callApiService.put('api/payers', 'Authorized Payers', newPayer);
  }

  payBill(paymentAmt: number) {
    // To Do: implement payment
    this.balance = this.balance - paymentAmt;
  }

}
