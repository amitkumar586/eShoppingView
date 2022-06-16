import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { MycartComponent } from './mycart/mycart.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import {  } from 'rxjs';

@NgModule({
  declarations: [
    MycartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    NgxPaginationModule
  ],exports:[
    MycartComponent
  ]
})
export class CartModule { }
