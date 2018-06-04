import { Injectable } from '@angular/core';
import { HoldModel } from '../models/hold-model';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HoldsService {

  private apiURL = 'api/holds';

  constructor(private http: HttpClient) { }

  getHolds(): Observable<HttpResponse<HoldModel[]>> {
    return this.http.get<HoldModel[]>(this.apiURL, { observe: 'response' })
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
    return throwError('myNKU failed to get your Holds; please try again later.');
  };
}

