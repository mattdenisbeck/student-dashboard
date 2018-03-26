import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-card-balance',
  templateUrl: './all-card-balance.component.html',
  styleUrls: ['./all-card-balance.component.scss']
})
export class AllCardBalanceComponent implements OnInit {

  balance: number;

  constructor() { }

  ngOnInit() {
    this.balance = 150.95;
  }

}
