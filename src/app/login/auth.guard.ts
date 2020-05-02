import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../core/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {
  auth:string;
  constructor(private router: Router, private toastrService: ToastrService,private loginService: LoginService) {
  }
  canActivate(): boolean {
    if (this.loginService.getAuth() === null || this.loginService.getAuth() === undefined) {
      this.router.navigate(['/login']);
      this.toastrService.warning('Please login to continue!', 'Covid-19 App');
      return false;
    }else{
      if(location.pathname.includes('news/add')&&this.loginService.getAuth()=='user'){
        this.router.navigate(['**']);
        return false;
      }else{
        return true;
      }

    }
  } 
  canLoad(): boolean {
    if (this.loginService.getAuth() === null || this.loginService.getAuth() === undefined) {
      this.router.navigate(['/login']);
      this.toastrService.warning("You don't have permission to view this page! Please Login", 'Covid-19 App');
      return false;
    }
    return true;
  } 
}
