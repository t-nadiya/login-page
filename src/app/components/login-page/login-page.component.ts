import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms'
import { LoginDetails } from '../../models/login-details';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    console.log('login');

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
      // email: new FormControl('', Validators.compose([Validators.required])),
      // password: new FormControl('', Validators.compose([Validators.required])),
    })

  }
  logIn(details: LoginDetails) {
    // console.log(this.loginForm.get('email')?.value);

    this.loginService.logIn(details)
    // .subscribe(result => {
    //   console.warn(result);
    // })
    console.log(details);


    this.loginForm.reset()
  }
}
