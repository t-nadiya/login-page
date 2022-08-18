import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url!: string;

  constructor(private http: HttpClient) { }
  logIn(data: any) {
    return this.http.post<any>(this.url, data)
  }

}
