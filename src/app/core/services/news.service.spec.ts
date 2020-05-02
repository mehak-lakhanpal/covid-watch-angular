import { TestBed, inject, async } from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { INews } from 'src/app/news/shared/interfaces/inews';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;
 

    beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ],
      providers: [
        NewsService,
        
      ]
    }),
    service = TestBed.inject(NewsService); 
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch news as an Observable`, async(inject([HttpTestingController, NewsService],
    (httpClient: HttpTestingController, newsService: NewsService) => {
     
      const data: INews[] = [{ 
        id : 1,
        title : 'Corona',
        description : 'desc',
        summary : 'summary',
        date :new Date(11/12/2000)
      }];
     
    newsService.getAllNews()
    .subscribe((news: any) => {
    expect(news.length).toBe(1);
    });
     
    let req = httpMock.expectOne('http://localhost:8080/api/news');
    expect(req.request.method).toBe("GET");
     
    req.flush(data);
    httpMock.verify();
     
    })));

    it(`should post news as an Observable`, async(inject([HttpTestingController, NewsService],
      (httpClient: HttpTestingController, newsService: NewsService) => {
       
        const data: INews = { 
          id : 1,
          title : 'Corona',
          description : 'desc',
          summary : 'summary',
          date :new Date(11/12/2000)
        };
       
      newsService.addNews(data)
      .subscribe((news: INews) => {
      expect(news).toEqual(data);
      });
       
      let req = httpMock.expectOne('http://localhost:8080/api/news');
      expect(req.request.method).toBe("POST");
       
      req.flush(data);
      httpMock.verify();
       
      })));
});
