import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { UserStoreService } from "@core/services/user-store.service";
import { UserService } from '@core/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message= "";
  constructor(
    private userService: UserService,
    private userStoreService: UserStoreService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loadForm();
  }

  loadForm() {
    this.loginForm = this.fb.group({
      username: [null, [
        Validators.required
      ]],
      password: [null, [
        Validators.required
      ]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.username.value, this.password.value)
      .subscribe(x => {
        this.message = x.msg;
        this.userStoreService.token = x.token
        this.router.navigate(['user', 'profile'])
      }, err => {
        this.message = err.error.msg
      });
  }
}
