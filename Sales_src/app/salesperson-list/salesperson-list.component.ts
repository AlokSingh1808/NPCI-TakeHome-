import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-salesperson-list',
  templateUrl: './salesperson-list.component.html',
  styleUrls: ['./salesperson-list.component.css']
})
export class SalespersonListComponent implements OnInit {

 
  constructor() { }

    salespersonList : Salesperson[] = [
      new Salesperson("Alok", "Singh","alok123@gmail.com", 35000,"210"),
      new Salesperson("Shubh", "Shrivastava","ashubh@gmail.com", 45000,"280"),
      new Salesperson("Aman", "Nigam","nigam@gmail.com", 23000,"160"),
      new Salesperson("Kashish", "Tripathi","Ktripathi@gmail.com", 28000,"188"),
      new Salesperson("Dhheraj", "Goyal","dhirah1998@gmail.com", 35000,"210"),
      new Salesperson("Shanaya", "Balaji","4832shanaya@gmail.com", 40000,"250")
  ]
   
  formModel : Salesperson = new Salesperson("","","",0,"")
  ngOnInit(): void {
    console.log(this.formModel)
  }
  onSubmit():void{
    this.salespersonList.push(this.formModel)
  }

}
