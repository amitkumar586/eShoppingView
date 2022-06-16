import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  {
    path:'products',
    loadChildren:()=> import('./products/products.module').then(mod => mod.ProductsModule)
  },
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path:'admin',
    loadChildren:()=> import('./admin/admin.module').then(mod => mod.AdminModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
