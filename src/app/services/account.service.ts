import { Injectable } from '@angular/core';
import { BankAccount } from '../models/bank-account';
import { AuthorizedPayer } from '../models/authorized-payer';

@Injectable()
export class AccountService {

  private bankAccounts: BankAccount[];
  private balance: number;
  private authorizedPayers: AuthorizedPayer[];

  constructor() {
    this.bankAccounts = [
      new BankAccount('My Checking', true, 'Nicholas Norse', 483620868, 'US Bank', 184734750),
      new BankAccount('Parents\' Checking', false, 'Nellie Norse', 648635294, '5/3 Bank', 236184590)
    ];
    this.authorizedPayers = [
      new AuthorizedPayer('Nathan Norse', new Date('01/01/2017'), new Date('12/31/2020'), 'nathan@gmail.com', new Date('01/01/2017'),
      'Nicholas Norse')
    ];
    this.balance = 2500.99;
  }

  getBankAccounts() {
    return this.bankAccounts;
  }

  getBalance() {
    return this.balance;
  }

  getAuthorizedPayers() {
    return this.authorizedPayers;
  }

  addAccount(newAccount: BankAccount) {
    this.bankAccounts.push(newAccount);
    // To Do: Persist account to database
  }

  deleteAccount(account: BankAccount) {
    this.bankAccounts = this.bankAccounts.filter(
      x => x.number !== account.number && x.routing !== account.routing
    );
    // To Do: Delete account in database
  }

  editAccount(newAccount: BankAccount) {
    const index = this.bankAccounts.findIndex(
      x => x.number === newAccount.number && x.routing === newAccount.routing
    );
    this.bankAccounts[index] = newAccount;
    // To Do: Persist account edit to database
  }

  addPayer(newPayer: AuthorizedPayer) {
    this.authorizedPayers.push(newPayer);
    // To Do: Persist account to database
  }

  deletePayer(payer: AuthorizedPayer) {
    this.authorizedPayers = this.authorizedPayers.filter(
      x => x.name !== payer.name && x.email !== payer.email
    );
    // To Do: Delete account in database
  }

  editPayer(newPayer: AuthorizedPayer) {
    const index = this.authorizedPayers.findIndex(
      x => x.name === newPayer.name
    );
    this.authorizedPayers[index] = newPayer;
    // To Do: Persist account edit to database
  }

  payBill(paymentAmt: number) {
    // To Do: implement payment
    this.balance = this.balance - paymentAmt;
  }

}
