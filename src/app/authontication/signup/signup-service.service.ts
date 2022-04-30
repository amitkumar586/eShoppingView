import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignupServiceService {
  apiUrl = 'http://localhost:3254/api/v1/signup';

  constructor(private httpClient: HttpClient) {}

  createData(data: any): Observable<any> {
    console.log(data, ' Data created');
    return this.httpClient.post(`${this.apiUrl}`, data);
  }
}
