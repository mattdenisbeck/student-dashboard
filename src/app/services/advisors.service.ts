import { Injectable } from '@angular/core';
import { AdvisorModel } from '../models/advisor-model';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AdvisorsService {

  private apiURL = 'api/advisors';

  constructor(private http: HttpClient) { }

  getAdvisors(): Observable<HttpResponse<AdvisorModel[]>> {
    return this.http.get<AdvisorModel[]>(this.apiURL, { observe: 'response' })
      .pipe(
        retry(3), //retry failed request 3 times 
        catchError(this.handleError) // handle error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('myNKU failed to get your Advisors; please try again later.');
  };

}
