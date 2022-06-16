import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SignupModel } from './signup/signup-model';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  REST_REGISTERAPI: string = 'http://localhost:4900/api/v1';
  REST_LOGINAPI: string = 'http://localhost:4900/api/v1';

  httpHeaders = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private httpClient: HttpClient) {}

  //create Users
  createData(data:any): Observable<any> {
    const API_URL = `${this.REST_REGISTERAPI}/user/register`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  //Login user
  login(data: any): Observable<any> {
    const API_URL = `${this.REST_LOGINAPI}/user/login`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      console.log(errorMessage);
    });
  }
}