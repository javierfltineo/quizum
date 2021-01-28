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
  
  // constructor(public baseService: BaseService) { }
  constructor() { }

  ngOnInit() {
  }

  onLogin(event) {
    console.log(event);
  }

  onRegister(event) {
    console.log(event);
  }
  
  login($event) {
    console.log(this.username, this.password);
    // var hola = this.baseService.getAllMazo();
    console.log();
  }
}
