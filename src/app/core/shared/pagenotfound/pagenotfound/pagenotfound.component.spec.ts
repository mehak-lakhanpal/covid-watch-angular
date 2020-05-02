import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { PagenotfoundComponent } from './pagenotfound.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('PagenotfoundComponent', () => {
  let component: PagenotfoundComponent;
  let fixture: ComponentFixture<PagenotfoundComponent>;
  let injector: TestBed; 
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfoundComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);  
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goBack method of component', () => {
    spyOn(component, 'goBack').and.callThrough();
   component.goBack()
    expect(component.goBack).toHaveBeenCalled();
  });

  it('should contain Take in Home Button', () => {
    const text = 'Take';
    const homeButton = fixture.debugElement.query(By.css('.btn-primary'));
    expect(homeButton.nativeElement.textContent).toContain(text);
  });
});
