import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login-page', loadChildren: () => import('./components/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'main-page', loadChildren: () => import('./components/main-page/main-page.module').then(m => m.MainPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
