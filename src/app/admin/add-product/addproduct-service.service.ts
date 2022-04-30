import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AddproductServiceService {
  apiUrl = 'http://localhost:3254/api/v1/upload/product';

  constructor(private httpClient: HttpClient) {}

  addNewProducts(data: any): Observable<any> {
    console.log(data, ' Product Added successfully');
    return this.httpClient.post(`${this.apiUrl}`, data);
  }  
}
