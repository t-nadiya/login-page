import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMainGuard } from 'src/app/auth/auth-main.guard';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [{ path: '', component: MainPageComponent, canActivate: [AuthMainGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
