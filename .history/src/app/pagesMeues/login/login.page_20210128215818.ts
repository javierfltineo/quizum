import { Component, Input, OnInit } from '@angular/core';
// import { BaseService } from 'src/app/services/meus/base.service';

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
  
  // constructor(public baseService: BaseService) { }
  constructor() { }

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
    console.log(event);
  }
  
  onLogin(event) {
    console.log(this.username, this.password);
    // var hola = this.baseService.getAllMazo();
    console.log();
  }
}
