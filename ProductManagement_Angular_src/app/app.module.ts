import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProdManagementComponentComponent } from './component/prod-management-component/prod-management-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdManagementComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProdManagementComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
