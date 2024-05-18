import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m=> m.HomeModule),
    title: 'HOMR | ECart'
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    title: 'PRODUCTS | ECart'
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then(m=>m.CheckoutModule),
    title: 'CHECKOUT | ECart'
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m=>m.UserModule),
    title: 'PROFILE | ECart'
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./components/wishlist/wishlist.component').then(c=>c.WishlistComponent),
    title: 'WISHLIST | ECart'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'LOGIN | ECart'
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'SIGNUP | ECart'
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'FORGOT PASSWORD | ECart'
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(c => c.NotFoundComponent),
    title: 'NOT FOUND | ECart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
