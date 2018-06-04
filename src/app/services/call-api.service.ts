import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  private httpOptions = {};

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers : new HttpHeaders({
        // add headers if needed
      }),
    };
  }

  get(resource: string, apiName: string): Observable<HttpResponse<any>> {
    return this.http.get( resource, { observe: 'response' })
      .pipe(
        retry(3), // retry failed request 3 times
        catchError(er => this.handleError(er, apiName, true)) // handle error
      );
  }

  post(resource: string, apiName: string, payload: any): Observable<any> {
    return this.http.post<any>(resource, payload, this.httpOptions)
      .pipe(
        retry(3),
        catchError(er => this.handleError(er, apiName, false))
      );
  }

  put(resource: string, apiName: string, payload: any): Observable<any> {
    return this.http.put<any>(resource, payload, this.httpOptions)
      .pipe(
        retry(3),
        catchError(er => this.handleError(er, apiName, false))
      );
  }

  delete(resource: string, apiName: string, id: number): Observable<any> {
    const url = `${resource}/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        retry(3),
        catchError(er => this.handleError(er, apiName, false))
      );
  }

  private handleError(error: HttpErrorResponse, apiName: string, isGet: boolean) {
    const action = isGet ? 'get' : 'update';
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
    return throwError(`myNKU failed to ${action} your ${apiName} data; please try again later.`);
  }

}
