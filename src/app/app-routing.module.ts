import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  {
    path: 'authontication',
    loadChildren: () =>
      import('./authontication/authontication.module').then(mod => mod.AuthonticationModule)
  },

  {
    path: 'products',
    loadChildren : ()=> import('./products/products.module').then(mod => mod.ProductsModule )
  },

  {
     path : 'order',
     loadChildren : ()=> import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
     path : 'admin',
     loadChildren : ()=> import('./admin/admin.module').then(mod => mod.AdminModule)
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
