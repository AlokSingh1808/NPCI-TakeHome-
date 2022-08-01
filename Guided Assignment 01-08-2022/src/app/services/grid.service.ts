import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  items : Product[] = []
  constructor() { }

  addToGrid(product : Product){
    this.items.push(product)
  }
getItems(){
  return this.items
}

clearGrid(){
  this.items = []
  return this.items
}

}
