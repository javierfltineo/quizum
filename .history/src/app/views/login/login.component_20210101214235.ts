import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public loading = false;
  public submitted = false;
  private userService : UserService;

  constructor(fb: FormBuilder,
    userService: UserService) {
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
      return True
  }
}
