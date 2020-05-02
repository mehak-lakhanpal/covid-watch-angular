import { Injectable } from '@angular/core';
import { IUser } from 'src/app/login/shared/interfaces/iuser';
import { Observable,of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginData: IUser[];

  constructor() {
    this.getUsers();
  }

  getUsers(): IUser[] {
    this.loginData = [{
      "id": 1,
      "username": "admin",
      "password": "admin"
    }];
    return this.loginData;
  }

  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }

  getAuth(): string{
   return localStorage.getItem('auth');
  }
}
