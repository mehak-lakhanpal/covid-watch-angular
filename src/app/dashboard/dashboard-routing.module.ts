import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StateListComponent } from './state-list/state-list.component';
import { StateDetailComponent } from './state-detail/state-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../login/auth.guard';

export const dashboardRoutes: Routes = [
  {
    path : '',
    component : DashboardComponent,
    canActivate:[AuthGuard],
    children : [
      {
        path:'',
        redirectTo: 'states',
        pathMatch: 'full' 
      },
      {
        path : 'states',
        component :  StateListComponent
      }, 
      {
        path: 'detail/:code', 
        component: StateDetailComponent
      }]
  }
];

@NgModule({
  declarations: [StateListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardRoutingModule { }
