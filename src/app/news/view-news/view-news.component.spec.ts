import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ViewNewsComponent } from './view-news.component';
import { NewsService } from 'src/app/core/services/news.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { INews } from '../shared/interfaces/inews';
import { Observable, of } from 'rxjs';

let service: NewsService;
let injector: TestBed; 
let httpMock: HttpTestingController;

describe('ViewNewsComponent', () => {
  let component: ViewNewsComponent;
  let fixture: ComponentFixture<ViewNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNewsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
    injector = getTestBed();
    service= injector.get(NewsService);
    httpMock = injector.get(HttpTestingController);  
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllNews method of service', () => {
    spyOn(service, 'getAllNews').and.callThrough();
   component.ngOnInit()
    expect(service.getAllNews).toHaveBeenCalled();
  });

  it('should match data with return value getAllNews method  of service', () => {

    const data: INews[] = [{ 
      id : 1,
      title : 'Corona',
      description : 'desc',
      summary : 'summary',
      date :new Date(11/12/2000)
    }];
   let news$: Observable<INews[]>;
   news$ = of(data);
   spyOn(service, 'getAllNews').and.returnValue(of(data));
   news$.subscribe((states) => {
    expect(states).toEqual(data);
  });
  });
});
