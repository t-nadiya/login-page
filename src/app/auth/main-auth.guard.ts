import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class MainAuthGuard implements CanActivate {
  constructor(private auth: LoginService, private router: Router) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isLoggedIn() ? true : this.router.navigate(['login-page'])

    // urlTree
    // return this.auth.isLogged().pipe(map(isLogged => isLogged || this.router.createUrlTree(['login-page'])))

  }

}
