import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditproductsComponent } from './editproducts/editproducts.component';

const routes: Routes = [
  
  {
    path:'admindashbord',
    component:AdminDashboardComponent
  },

  {
    path:'addproduct',
    component:AddproductsComponent
  },

  {
    path:'editproduct/:_id',
    component:EditproductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
