import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms'
import { LoginDetails } from '../../models/login-details';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  public loginForm!: FormGroup
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      agree: ['', Validators.requiredTrue]
      // email: new FormControl('', Validators.compose([Validators.required])),
      // password: new FormControl('', Validators.compose([Validators.required])),
    })

  }
  logIn(details: LoginDetails) {

    this.loginService.logIn(details)
      .subscribe({
        next: result => {
          if (result.email === 'nadiia.tytarenko@neobank.one' && result.password === '12345') {
            this.loginService.setLoggedIn();
            this.router.navigate(['main-page'])
          }

        },
        error: error => {

        }
      })

    this.loginForm.reset()
  }
}

