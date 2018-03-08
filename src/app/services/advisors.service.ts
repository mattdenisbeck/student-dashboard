import { Injectable } from '@angular/core';
import { AdvisorModel } from '../models/advisor-model';

@Injectable()
export class AdvisorsService {

  private advisors: AdvisorModel[];

  constructor() {
    this.advisors = new Array<AdvisorModel>();
    this.advisors.push(new AdvisorModel('Jane', 'Doe', 'Computer Science', 'Professor',
    'doe.jane@nku.edu', 'Griffin Hall 452', '859-572-5555', 'Major'));
    this.advisors.push(new AdvisorModel('John', 'Doe', 'Political Science', 'Professor',
    'doe.john@nku.edu', 'Landrum Academic Center 502', '859-572-5555', 'Minor'));
  }

  getAdvisors() {
    return this.advisors;
  }

}
