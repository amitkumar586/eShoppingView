import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  REST_ADDPRODUCTAPI: string = 'http://localhost:4900/api/v1';
  
  REST_GETALLPRODUCTAPI = 'http://localhost:4900/api/v1/products';

  REST_GETPRODUCTBYIDAPI: string = 'http://localhost:4900/api/v1/product';
  
  REST_EDITPRODUCTAPI: string = 'http://localhost:4900/api/v1/product';

  REST_DELETEAPI : string = 'http://localhost:4900/api/v1/product';

  httpHeaders = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private httpClient: HttpClient) {}

    //create Users
    createProduct(data: any): Observable<any> {
      const API_URL = `${this.REST_ADDPRODUCTAPI}/products/create`;
      return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
    }

    getAllProducts():Observable<any> {
      return this.httpClient.get(`${this.REST_GETALLPRODUCTAPI}`);
    }


    //get product by id
    getProductById(id:any):Observable<any>{

      const API_URL =`${this.REST_GETPRODUCTBYIDAPI}/${id}`;
      return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
        return res || {}
      }),
      catchError(this.handleError) 
      ) 
    }

    //update product  
     editProduct(id:any , data:any ):Observable<any>{
      const API_URL = `${this.REST_EDITPRODUCTAPI}/${id}`;
      return this.httpClient.put(API_URL , data , {headers:this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
    }


    //delete product
    deleteProduct(id:any):Observable<any>{
      const API_URL = `${this.REST_DELETEAPI}/${id}`;
      return this.httpClient.delete(API_URL ,{headers:this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
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