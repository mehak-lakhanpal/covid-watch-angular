import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes, RouterModule } from '@angular/router';

export const pageRoutes: Routes = [
  {
    path : '',
    component : PagenotfoundComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forChild(pageRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class PagenotfoundRoutingModule { }
