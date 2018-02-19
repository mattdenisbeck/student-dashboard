import { Injectable } from '@angular/core';
import { HoldModel } from '../models/hold-model';

@Injectable()
export class HoldsService {
  holds: HoldModel[] = [
    {
      'msg': 'Account Balance Past Due',
      'path' : '/account',
      'external' : false
    },
    {
      'msg': 'Advisor Meeting Required',
      'path' : '/advisors',
      'external' : false
    },
    {
      'msg': 'Missing Course Evaluations',
      'path' : '/schedule',
      'external' : false
    }
  ];

  constructor() { }

  getHolds() {
    return this.holds;
  }
}
