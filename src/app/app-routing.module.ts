import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { authGuard } from './core/route-guards/auth.guard';
import { loginGuard } from './core/route-guards/login.guard';

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
    path: 'profile',
    loadChildren: () => import('./modules/user/user.module').then(m=>m.UserModule),
    title: 'PROFILE | ECart',
    canActivate: [authGuard]
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./components/wishlist/wishlist.component').then(c=>c.WishlistComponent),
    title: 'WISHLIST | ECart',
    canActivate:  [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'LOGIN | ECart',
    canActivate:  [loginGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'SIGNUP | ECart',
    canActivate:  [loginGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'FORGOT PASSWORD | ECart',
    canActivate:  [loginGuard]
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
