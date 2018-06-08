import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'app-tuition-balance',
  templateUrl: './tuition-balance.component.html',
  styleUrls: ['./tuition-balance.component.scss']
})
export class TuitionBalanceComponent implements OnInit {

  balance: number;

  constructor( private accountService: AccountService ) {  }

  ngOnInit() {
    this.balance = this.accountService.getBalance();
  }

}
