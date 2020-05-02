import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateDetailComponent } from './state-detail/state-detail.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateService } from '../core/services/state.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../core/shared/header/header.component';


@NgModule({
  declarations: [DashboardComponent,StateDetailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
  ],
  providers: [StateService],
  exports: [
    DashboardComponent,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
  constructor() {
    console.log("Dashboard Module loaded.");
  }
 }
