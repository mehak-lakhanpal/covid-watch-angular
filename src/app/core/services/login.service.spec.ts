import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { IUser } from 'src/app/login/shared/interfaces/iuser';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({}),
    service = TestBed.inject(LoginService);
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('auth');
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return string from getAuth when there is a auth', () => {
    localStorage.setItem('auth', '1234');
    expect(service.getAuth()).toBeTruthy();
});

it('should return true from getAuth when admin is logged in', () => {
  const user: IUser={
    "id": 1,
    "username": "admin",
    "password": "admin"
  };
  expect(service.validateUser(user)).toBeTruthy();
});
});
