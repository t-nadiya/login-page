import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDetails } from '../models/login-details';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged: boolean = false;

  constructor(private http: HttpClient) { }
  logIn(details: LoginDetails) {
    return this.http.post<LoginDetails>('http://localhost:3000/login', details)
    // return this.http.post<LoginDetails>('../fake-backend/db.json', details)
  }
  isLoggedIn() {
    return this.isLogged;
  }
  setLoggedIn() {
    this.isLogged = true;
  }
}
