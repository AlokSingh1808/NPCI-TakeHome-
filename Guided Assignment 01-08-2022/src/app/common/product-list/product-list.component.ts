import { Component, OnInit } from '@angular/core';
import { EcommerceserviceService } from 'src/app/services/ecommerceservice.service';
import { Product } from 'src/app/classes/product';
import { Router } from '@angular/router';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  formModel: Product = new Product(0,"","","",0,"",0,"","",0)

  products : Product[] 
  constructor(private service : EcommerceserviceService, private routes : Router, private gridService : GridService) { }

  ngOnInit(): void {
    this.listOfProducts()
  }

  addToGrid(product: Product) {
    this.gridService.addToGrid(product);
    
  }

  listOfProducts(){
    this.service.getAllProducts().subscribe(data=>{
      console.log(data)
      this.products = data
    })
  }

  onSubmit():void{
    this.products.push(this.formModel)
  }

  addProduct(){
    this.routes.navigateByUrl("/merchant")
  }
  gotoHome(){
    this.routes.navigateByUrl("/")
  }

}
