import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProdManagementServiceService } from 'src/app/services/prod-management-service.service';

@Component({
  selector: 'app-prod-management-component',
  templateUrl: './prod-management-component.component.html',
  styleUrls: ['./prod-management-component.component.css']
})
export class ProdManagementComponentComponent implements OnInit {


  constructor(private service : ProdManagementServiceService) { }
  product!: Product[];

  ngOnInit(): void {
    this.listofProducts()
  }

  listofProducts(){
    this.service.getAllProducts().subscribe(data=>{console.log(data)
      this.product = data;
    })
  }

}
