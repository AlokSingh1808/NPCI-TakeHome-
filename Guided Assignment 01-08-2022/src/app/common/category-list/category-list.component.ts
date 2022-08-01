import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/classes/categories';
import { Product } from 'src/app/classes/product';
import { EcommerceserviceService } from 'src/app/services/ecommerceservice.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  formModel: Categories = new Categories(0,"")

  categories : Categories[]
  constructor(private service : EcommerceserviceService) { }

  ngOnInit(): void {
    this.listOfCategories()
  }

  listOfCategories(){
    this.service.getAllCategories().subscribe(data=>{
      console.log(data)
      this.categories = data
  })
}

onSubmit():void{
    this.categories.push(this.formModel)
  }

}
