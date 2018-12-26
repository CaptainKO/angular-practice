import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


import { UserService } from '@app/core/services/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  // use login css
  styleUrls: ['../login/login.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  message: string;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signinForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.min(5),
        Validators.maxLength(25)
      ]],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]
    });
    this.signinForm.valueChanges.subscribe(console.log);
  }
  get username() {
    return this.signinForm.get('username');
  }

  get password() {
    return this.signinForm.get('password');
  }

  get email() {
    return this.signinForm.get('email');
  }
  ngOnInit() {
  }
  register() {
    console.log(this.username, this.password);
    this.userService.register(this.username.value, this.password.value)
      .subscribe((res) => {
        this.message = res.msg;
        this.router.navigateByUrl('user/login');
      }, (err) => {
        this.message = err.error.msg
      });
  }

}
