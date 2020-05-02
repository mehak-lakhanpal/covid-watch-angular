import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewsComponent } from './add-news/add-news.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AuthGuard } from '../login/auth.guard';

export const newsRoutes: Routes = [
  {
    path : '',
    component : NewsComponent,
    canActivate:[AuthGuard],
    children : [
      {
        path:'',
        redirectTo: 'list',
        pathMatch: 'full' 
      },
      {
        path : 'list',
        component :  ViewNewsComponent
      }, 
      {
        path : 'add',
        component : AddNewsComponent,
      }]
  }
];

@NgModule({
  declarations: [ViewNewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class NewsRoutingModule { }
