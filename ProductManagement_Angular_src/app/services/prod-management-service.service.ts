import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProdManagementServiceService {

  produrl = "http://localhost:8080/api/prod";

  constructor( private httpClient : HttpClient  ){}
    getAllProducts() : Observable<Product[]>{
      return this.httpClient.get<getProductResponse>(this.produrl).pipe(map(response => response._embedded.products))

    }
  
}

interface getProductResponse{
  _embedded : {
    products : Product[]
  }
}