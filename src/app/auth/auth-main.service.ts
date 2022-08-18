import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthMainService {

  constructor() { }

  isLogged() {
    return false;

    // urlTree
    // return of(false).pipe(delay(500));

  }
}
