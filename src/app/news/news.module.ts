import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { AddNewsComponent } from './add-news/add-news.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NewsInMemoryDataService } from '../core/services/news-in-memory-data.service';
import { NewsComponent } from './news/news.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddNewsComponent, NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ReactiveFormsModule, 
    FormsModule ,
  ],
  exports: [
      ReactiveFormsModule,
      FormsModule,
  ]
})
export class NewsModule {
  constructor() {
    console.log("News Module loaded.");
  }
 }
