import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'app/core/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(fb: FormBuilder,
    private userService: UserService) {
      this.formGroup = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  ngOnInit() {
      this.formGroup.reset({username: '', password : ''});
  }

  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }


  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      //this.alertService.clear();

      // stop here if form is invalid
      if (this.formGroup.invalid) {
          return;
      }

      this.loading = true;
      // this.userService.login(this.f.username.value, this.f.password.value)
      //     .pipe(first())
      //     .subscribe({
      //         next: () => {
      //             // get return url from query parameters or default to home page
      //             const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      //             this.router.navigateByUrl(returnUrl);
      //         },
      //         error: error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         }
      //     });
  }
}
