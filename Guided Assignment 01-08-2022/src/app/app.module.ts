import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { CategoryListComponent } from './common/category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './common/grid/grid.component';
import { AddProductComponent } from './common/create-product/create-product.component';



const routes : Routes =[
  {path : '',component:WelcomeComponent},
  {path:'products',component:ProductListComponent},
  {path:'categories',component:CategoryListComponent},
  {path: 'addform', component: AddProductComponent },
  {path:'grid', component: GridComponent}
  

]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    CategoryListComponent,
    WelcomeComponent,
    GridComponent
  ],
  imports: [
    NgModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
