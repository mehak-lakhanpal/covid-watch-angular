import { Component, OnInit} from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  auth : string;
  isLoggedIn : boolean;
  title =  'Covid App'
  isAppRoute: boolean;

  constructor(private router: Router,private loginService: LoginService) {}
    
    ngOnInit() {
        this.setNavLogin();
    }

    setNavLogin(){
      this. router.events.pipe(
        filter(i=> i instanceof NavigationEnd)
      ).subscribe(e => {
        this.auth = this.loginService.getAuth();
        if (this.auth !== null && this.auth !== undefined) {
          this.isAppRoute = true;
        }else{
          this.isAppRoute = false;
        }

        if(this.auth=='admin'){
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
      });
    }

  onclick(){
    localStorage.removeItem('auth');
    this.router.navigate(['login']);
  }

}
