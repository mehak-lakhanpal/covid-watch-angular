import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { IUser } from '../shared/interfaces/iuser';

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

   getErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'You must enter a value' :
        this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
            '';
  }

  login(myform: IUser) {
    if (this.loginService.validateUser(myform)) {
      localStorage.setItem('auth', 'admin');
      localStorage.setItem('isLoggedIn','true')
      console.log(localStorage.getItem('auth'))
    }else{
      localStorage.setItem('auth', 'user');
    }
    this.route.navigate(['/dashboard']);
  }


  ngOnInit() {
  }

}
