import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator } from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    console.log('login');

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })

  }
  logIn() {
    console.log('kkkk');
    // this.loginForm.reset()

  }
}
