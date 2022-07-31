import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/classes/department';
import { EmpmanagementService } from 'src/app/services/empmanagement.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private service :EmpmanagementService){ }

  formModel: Department = new Department(0,"","")

  departments : Department[];
  ngOnInit(): void {
    this.listofDepartment()
  }

  listofDepartment(){
    this.service.getAllDepartment().subscribe(data=>{
      console.log(data)
      this.departments = data;
    })
  }

  onSubmit():void{
    this.departments.push(this.formModel)
  }

}
