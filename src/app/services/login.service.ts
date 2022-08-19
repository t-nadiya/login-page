import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDetails } from '../models/login-details';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url!: string;

  constructor(private http: HttpClient) { }
  logIn(details: LoginDetails) {
    return this.http.post<LoginDetails>(this.url, details)
  }

}
