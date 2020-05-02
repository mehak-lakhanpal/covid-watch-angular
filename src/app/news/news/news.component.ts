import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  auth : string;
  isLoggedIn : boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit(){
    this.auth =  this.loginService.getAuth();
      if(this.auth=='admin'){
        this.isLoggedIn = true;
      }
  }

}
