import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPrecautionComponent } from './view-precaution/view-precaution.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';

export const precautionRoutes: Routes = [
  {
    path : '',
    component : ViewPrecautionComponent,
    canActivate:[AuthGuard],
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(precautionRoutes)
  ],
  exports: [
    RouterModule,
  ],
})
export class PrecautionRoutingModule { }
