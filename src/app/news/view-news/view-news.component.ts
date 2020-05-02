import { Component, OnInit } from '@angular/core';
import { INews } from '../shared/interfaces/inews';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  newsList : INews[];

  constructor(private newsService: NewsService) {
   }

  ngOnInit() {
    this.newsService.getAllNews().subscribe(data => {
      this.newsList = this.sortByDate(data);
    })
  }

  sortByDate(news:INews[]): INews[]{
    return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

}
