import { Component, OnInit } from '@angular/core';
import { EcommerceserviceService } from 'src/app/services/ecommerceservice.service';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  formModel: Product = new Product(0,"","","",0,"",0,"","",0)

  products : Product[] 
  constructor(private service : EcommerceserviceService) { }

  ngOnInit(): void {
    this.listOfProducts()
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

}
