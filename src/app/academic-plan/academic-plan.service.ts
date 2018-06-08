import { Injectable } from '@angular/core';
import { AcademicPlanModel } from './models/academic-plan-model';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallApiService } from '../services/call-api.service';

@Injectable()
export class AcademicPlanService {

  private apiURL = 'api/academicPlan';

  constructor( private callApiService: CallApiService ) { }

  getFullPlan(): Observable<HttpResponse<AcademicPlanModel>> {
    return this.callApiService.get(this.apiURL, 'Academic Plan');
  }

}
