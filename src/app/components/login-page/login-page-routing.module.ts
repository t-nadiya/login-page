import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthGuard } from '../../auth/login-auth.guard';
import { LoginPageComponent } from './login-page.component';

const routes: Routes = [{ path: '', canActivate: [LoginAuthGuard], component: LoginPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
