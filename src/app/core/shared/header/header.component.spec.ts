import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let injector: TestBed; 
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);  
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setNavLogin method of component', () => {
    spyOn(component, 'setNavLogin').and.callThrough();
   component.ngOnInit()
    expect(component.setNavLogin).toHaveBeenCalled();
  });

  it('should call onclick method of component', () => {
    spyOn(component, 'onclick').and.callThrough();
   component.onclick()
    expect(component.onclick).toHaveBeenCalled();
  });
});
