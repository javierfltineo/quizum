import { Component, Injectable, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {AppComponent} from '../../app.component';

import { BaseService } from 'src/app/services/meus/base.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() username:string;
  @Input() password:string;

  data = {};
  isUsernameValid = true;
  isPasswordValid = true;
  
  public badLogin : boolean = false
  
  // constructor(public baseService: BaseService) { }
  constructor(private appComponent:AppComponent,
    public navCtrl: NavController,
    public baseService: BaseService,

    ) { 
    appComponent.showMenu = false;
  }

  ngOnInit() {
    this.data = {
      'headerTitle'     : 'Login + logo 1',
      "background"      : "assets/imgs/background/26.jpg",
      "logo"            : "assets/imgs/logo/1.png",
      "skip"            : "Skip",
      "username"        : "Enter your username",
      "password"        : "Enter your password",
      "labelUsername"   : "USERNAME",
      "labelPassword"   : "PASSWORD",
      "forgotPassword"  : "Forgot password?",
      "login"           : "Login",
      "title"           : "Login to your account",
    }
    
  }
  
  onLogin(event) {
    console.log(this.username, this.password);
    this.baseService.login(this.username, this.password)
    
    
      
    
  }
  
}
