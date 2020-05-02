import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { LoginService } from 'src/app/core/services/login.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of, Observable } from 'rxjs';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let service: LoginService;
  let injector: TestBed; 
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule,
        ReactiveFormsModule,
        FormsModule]
    })
    .compileComponents();
    injector = getTestBed();
    service= injector.get(LoginService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAuth should match with admin ', () => {
    const data= 'admin';
    const auth = data;
   spyOn(service, 'getAuth').and.returnValue(data);
   component.ngOnInit();
    expect(auth).toEqual(data);
  });

it('should call getAuth method of service', () => {
  spyOn(service, 'getAuth').and.callThrough();
 component.ngOnInit();
 expect(service.getAuth).toHaveBeenCalled();
});

})

