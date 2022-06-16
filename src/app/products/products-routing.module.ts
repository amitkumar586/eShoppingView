import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component'; 
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component'; 
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';
import { ViewProductsByDateComponent } from './view-products-by-date/view-products-by-date.component';

const routes: Routes = [
  {
  path:'view-product/:id',
  component : ViewProductComponent,
  pathMatch:'full'
  },
  {
    path:'list-products',
    component : ViewAllProductsComponent,
    pathMatch:'full'
  },
  {
    path:'search-category',
    component : ViewProductsByCategoryComponent,
    pathMatch:'full'
  },
  {
    path:'search-date',
    component : ViewProductsByDateComponent,
    pathMatch:'full'
  },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ProductsRoutingModule { }
