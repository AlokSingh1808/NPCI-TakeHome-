import { Injectable } from '@angular/core';
import { Observable , map} from 'rxjs';
import { Product } from '../classes/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from '../classes/categories';

@Injectable({
  providedIn: 'root'
})
export class EcommerceserviceService {

  prodURL = "http://localhost:8080/api/prod"
  categoryURL="http://localhost:8080/api/category"

  constructor(private httpClient : HttpClient) { }
  getAllProducts() : Observable<Product[]>{
    return this.httpClient.get<getProductResponse>(this.prodURL).pipe(map(response => response._embedded.products))
  }
  getAllCategories()  : Observable<Categories[]>{
    return this.httpClient.get<getCategoryResponse>(this.categoryURL).pipe(map(response => response._embedded.productCategories))
  }

  saveProduct(product : Product)
  {
    console.log(product)

    const httpOptions =
    {
      headers : new HttpHeaders
      ({
        'Content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<Product>(this.prodURL,product,httpOptions)
  }
}
  
 

interface getProductResponse{
  _embedded : {
    products : Product[]
  }
}

interface getCategoryResponse{
  _embedded : {
    productCategories : Categories[]
  }
}
