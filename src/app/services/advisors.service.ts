import { Injectable } from '@angular/core';
import { AdvisorModel } from '../models/advisor-model';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallApiService } from './call-api.service';

@Injectable()
export class AdvisorsService {

  private apiURL = 'api/advisors';

  constructor(private callApiService: CallApiService) { }

  getAdvisors(): Observable<HttpResponse<AdvisorModel[]>> {
    return this.callApiService.get(this.apiURL, 'Advisors');
  }

}
