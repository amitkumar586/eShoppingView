import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ViewProductServiceService {
  
  apiUrl = 'http://localhost:3254/api/v1/get/products';

  constructor(private httpClient: HttpClient) {}

getData(){
  return this.httpClient.get(this.apiUrl);

}
  
}
