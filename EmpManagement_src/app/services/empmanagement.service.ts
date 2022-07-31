import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from '../classes/department';
import { Employee } from '../classes/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpmanagementService {

  empurl = "http://localhost:8080/api/emp"
  depturl ="http://localhost:8080/api/dept"

  constructor(private httpClient : HttpClient) { }

  getAllEmployee() : Observable<Employee[]>{
    return this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees))
  }

getAllDepartment() : Observable<Department[]>{
  return this.httpClient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments))
  }
}

interface getEmployeeResponse{
  _embedded : {
    employees : Employee[]
  }
}
interface getDepartmentResponse{
  _embedded :{
    departments : Department[]
  }

}
