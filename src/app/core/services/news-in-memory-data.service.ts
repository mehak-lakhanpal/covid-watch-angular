import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INews } from 'src/app/news/shared/interfaces/inews';

@Injectable({
  providedIn: 'root'
})
export class NewsInMemoryDataService implements InMemoryDbService {

  createDb(){
    const news : INews[] = [];
    return {news};
  }

  genId(news : INews[]): number {
    return news.length > 0 ? Math.max(...news.map(n => n.id)) + 1 : 1;
  }

  constructor() { }
}
