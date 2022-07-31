import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { EmpmanagementService } from 'src/app/services/empmanagement.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service :EmpmanagementService) { }
  formModel: Employee = new Employee(0,"","","",0,0,0,0)
  
  employees : Employee[];
  ngOnInit(): void {
    this.listofEmployees()
  }
  
  listofEmployees(){
    this.service.getAllEmployee().subscribe(data=>{
      console.log(data)
      this.employees = data;
    })
  }
  onSubmit():void{
    this.employees.push(this.formModel)
  }
}
