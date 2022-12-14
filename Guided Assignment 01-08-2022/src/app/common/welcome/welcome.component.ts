import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private routes : Router) { }

  ngOnInit(): void {
  }

  productDetails(){
    this.routes.navigateByUrl("/products")
  }
  categoryDetails(){
    this.routes.navigateByUrl("/categories")
  }

  NewProduct(){
    this.routes.navigateByUrl("/newProduct")
    }

  NewCategory(){
    this.routes.navigateByUrl("/newCategory")
      }
}
