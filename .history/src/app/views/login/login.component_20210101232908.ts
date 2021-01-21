import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public loading = false;
  public submitted = false;
  private userService : UserService;
  private alertService : AlertService;
  private router : Router;

  constructor(fb: FormBuilder, alertService : AlertService, userService : UserService) {
      console.log('constructor');
      this.formGroup = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.alertService = AlertService;
  }

  ngOnInit() {
      this.formGroup.reset({username: '', password : ''});
  }

  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

  onSubmit() {
    console.log('onSubmit');
      this.submitted = true;
      this.alertService.success('onSubmit');
      // reset alerts on submit
      //this.alertService.clear();

      // stop here if form is invalid
      if (this.formGroup.invalid) {
          return;
      }

      this.loading = true;
      this.userService.login(this.f.username.value, this.f.password.value)
          .subscribe({
              next: () => {
                this.alertService.success('Login correcto');
                  // get return url from query parameters or default to home page
                  //const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  this.router.navigateByUrl("dashboard");
              },
              error: error => {

                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
}
