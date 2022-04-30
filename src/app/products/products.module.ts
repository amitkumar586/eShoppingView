import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductsByDateComponent } from './view-products-by-date/view-products-by-date.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component'; 

@NgModule({
  declarations: [
    ViewProductComponent,
    ViewAllProductsComponent,
    ViewProductsByDateComponent,
    ViewProductsByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],exports:[
    ViewProductComponent
  ]
})
export class ProductsModule { }
