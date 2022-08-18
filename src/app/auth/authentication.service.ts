import { Injectable } from '@angular/core';
// import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isLoggedIn() {
    return false;

    // urlTree
    // return of(false).pipe(delay(500));

  }
}
