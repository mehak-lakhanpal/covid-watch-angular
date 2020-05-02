import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Routes, RouterModule } from '@angular/router';

export const loginRoutes: Routes = [
  {
    path : '',
    component : AdminLoginComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class LoginRoutingModule { }
