import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ViewProductServiceService {
  

  
  // apiUrl1 = 'http://localhost:3254/api/v1/get/products';
  apiUrl1 = 'http://localhost:4900/api/v1/products';
  apiUrl2 = 'http://localhost:3254/api/v1/get/product/:id';

  constructor(private httpClient: HttpClient) {}

getData():Observable<any> {
  return this.httpClient.get(this.apiUrl1);
}

productId = 0;

getDataById():Observable<any> {
  return this.httpClient.get(this.apiUrl2);
}
  
}


// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })

// export class AddproductServiceService {
//   apiUrl = 'http://localhost:3254/api/v1/upload/product';

//   constructor(private httpClient: HttpClient) {}

//   addNewProducts(data: any): Observable<any> {
//     console.log(data, ' Product Added successfully');
//     return this.httpClient.post(`${this.apiUrl}`, data);
//   }  
// }


