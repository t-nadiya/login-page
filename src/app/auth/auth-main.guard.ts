import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthMainService } from './auth-main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthMainGuard implements CanActivate {
  constructor(private auth: AuthMainService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isLogged() ? true : this.router.navigate(['login-page'])

    // urlTree
    // return this.auth.isLogged().pipe(map(isLogged => isLogged || this.router.createUrlTree(['login-page'])))

  }

}
