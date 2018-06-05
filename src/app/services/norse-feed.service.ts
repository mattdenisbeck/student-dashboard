import { Injectable } from '@angular/core';
import { NorseFeedItem } from '../models/norse-feed-item';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallApiService } from './call-api.service';

@Injectable()
export class NorseFeedService {

  private apiURL = 'api/norseFeedItems';

  constructor(private callApiService: CallApiService) {}

  getFeedItems(): Observable<HttpResponse<NorseFeedItem[]>> {
    return this.callApiService.get(this.apiURL, 'Norse Feed');
  }
}
