import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule, 
    LoginRoutingModule ,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    AdminLoginComponent,
  ]
})
export class LoginModule { 
  constructor() {
    console.log("Login Module loaded.");
  }
}
