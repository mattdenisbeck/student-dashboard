import { Injectable } from '@angular/core';
import { HoldModel } from '../models/hold-model';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallApiService } from './call-api.service';

@Injectable()
export class HoldsService {

  private apiURL = 'api/holds';

  constructor(private callApiService: CallApiService) { }

  getHolds(): Observable<HttpResponse<HoldModel[]>> {
    return this.callApiService.get(this.apiURL, 'Holds');
  }

}

