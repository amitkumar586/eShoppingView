import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddproductsComponent,
    EditproductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    AdminDashboardComponent,
    AddproductsComponent,
    EditproductsComponent
  ]
})
export class AdminModule { }
