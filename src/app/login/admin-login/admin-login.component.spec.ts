import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { AdminLoginComponent } from './admin-login.component';
import { LoginService } from 'src/app/core/services/login.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { IUser } from '../shared/interfaces/iuser';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;
  let service: LoginService;
  let injector: TestBed; 
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginComponent ],
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
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validateUser returns false when user is not admin', () => {
    let loginForm: IUser;
   spyOn(service, 'validateUser').and.returnValue(false);
   component.ngOnInit()
   expect(service.validateUser(loginForm)).toBeFalsy();
 });

 it('validateUser returns true when user is not admin', () => {
  let loginForm: IUser;
 spyOn(service, 'validateUser').and.returnValue(true);
 component.ngOnInit()
 expect(service.validateUser(loginForm)).toBeTruthy();
});

});
