import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { AlertService } from '../../core/services/alert.service';
import { OdooRPCService } from '../../core/services/odoorpc.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public loading = false;
  public submitted = false;
  private router : Router;

  constructor(fb: FormBuilder, private alertService: AlertService, private userService: UserService, private odooService: OdooRPCService) {
      console.log('constructor');
      this.formGroup = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.userService = userService;
      this.alertService = alertService;
      this.odooService = odooService;
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
      let result = this.userService.login(this.f.username.value, this.f.password.value);
      if (result) {
        this.alertService.success('Login correcto');
        this.router.navigateByUrl("dashboard");
      } else {
        this.alertService.error('error');
        this.loading = false;
      }
          // .subscribe({
          //     next: () => {
          //       this.alertService.success('Login correcto');
          //         // get return url from query parameters or default to home page
          //         //const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          //         this.router.navigateByUrl("dashboard");
          //     },
          //     error: error => {

          //         this.alertService.error(error);
          //         this.loading = false;
          //     }
          // });
  }
}
