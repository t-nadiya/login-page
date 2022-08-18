import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAuthGuard } from '../../auth/main-auth.guard';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [{ path: '', canActivate: [MainAuthGuard], component: MainPageComponent, }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
