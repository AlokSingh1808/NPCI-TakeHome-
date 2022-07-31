import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DepartmentComponent } from './components/department/department.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes =[
  {path : '',component:WelcomeComponent},
  {path:'employees ',component: EmployeeComponent},
  {path:'departments',component:DepartmentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    WelcomeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
