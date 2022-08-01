import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { CategoryListComponent } from './common/category-list/category-list.component';

import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path : '',component:WelcomeComponent},
  {path:'products',component:ProductListComponent},
  {path:'categories',component:CategoryListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
