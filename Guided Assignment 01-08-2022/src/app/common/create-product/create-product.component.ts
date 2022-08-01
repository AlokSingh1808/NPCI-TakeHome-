import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { EcommerceserviceService } from 'src/app/services/ecommerceservice.service';
import { Injectable } from '@angular/core';
import { Categories } from 'src/app/classes/categories';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class AddProductComponent implements OnInit {

  product : Product = new Product(0,"","","",0,"",0,"","",0)
  categories : Categories[]
  constructor(
    private service : EcommerceserviceService,
    private route : Router) { }

  ngOnInit(): void {
    this.listOfCategory();
  }
  listOfCategory(){
    this.service.getAllCategories().subscribe(data => {
      this.categories = data
    })
  }

  onSubmit(): void{
    this.service.saveProduct(this.product).subscribe(() =>{
      this.route.navigateByUrl("/shop")
    })
  }
  gotoHome(){
    this.route.navigateByUrl("/")
  }
  viewProduct(){
    this.route.navigateByUrl("/shop")
  }

}