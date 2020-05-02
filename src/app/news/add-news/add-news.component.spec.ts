import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { AddNewsComponent } from './add-news.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { INews } from '../shared/interfaces/inews';
import { NewsService } from 'src/app/core/services/news.service';
import { Observable, of } from 'rxjs';

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;
  let service: NewsService;
  let injector: TestBed; 
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule,
        ReactiveFormsModule,
        FormsModule]
    })
    .compileComponents();
    injector = getTestBed();
    service= injector.get(NewsService);
    httpMock = injector.get(HttpTestingController); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match data with return value addNews method  of service', () => {
    const data: INews = { 
      id : 1,
      title : 'Corona',
      description : 'desc',
      summary : 'summary',
      date :new Date(11/12/2000)
    };
   let news$: Observable<INews>;
   news$ = of(data);
   spyOn(service, 'addNews').and.returnValue(of(data));
   component.ngOnInit()
   news$.subscribe((states) => {
    expect(states).toEqual(data);
 });
});

it('should call save method of component', () => {
  const data: INews = { 
    id : 1,
    title : 'Corona',
    description : 'desc',
    summary : 'summary',
    date :new Date(11/12/2000)
  };
  const myspy = spyOn(component, 'save').and.callThrough();
  component.save(data)
  expect(myspy).toHaveBeenCalled();
});

})
