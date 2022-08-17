import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login-page', loadChildren: () => import('./components/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'main-page', loadChildren: () => import('./components/main-page/main-page.module').then(m => m.MainPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// const routes: Routes = [
//   { path: '', redirectTo: '', pathMatch: 'full' },
//   { path: 'edit-product', loadChildren: () => import('./components/edit-product/edit-product.module').then(m => m.EditProductModule) },
//   { path: 'store', component: ProductslistComponent, },
//   { path: 'cart', loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule) },
//   { path: 'store/product-details/:productId', loadChildren: () => import('./components/product/product-details/product-details.module').then(m => m.ProductDetailsModule) },

// ];


