import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthonticationRoutingModule } from './authontication-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms' 


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthonticationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthonticationModule { }
