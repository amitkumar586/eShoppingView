import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component'
const routes: Routes = [
  {
    path:'addproduct',
    component:AddProductComponent
  },
  {
    path:'updateproduct',
    component:UpdateProductComponent
  },
  {
    path:'deleteproduct',
    component:DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
