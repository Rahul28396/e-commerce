import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { authGuard } from './core/route-guards/auth.guard';
import { loginGuard } from './core/route-guards/login.guard';
import { checkoutPageGuard } from './core/route-guards/checkout-page.guard';
import { SelectivePreloadingStrategyService } from './core/services/selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m=> m.HomeModule),
    title: 'HOME'
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    title: 'PRODUCTS',
    data: {
      preload: true
    }
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then(m=>m.CheckoutModule),
    title: 'CHECKOUT',
    canActivate: [authGuard],
    canActivateChild: [checkoutPageGuard],
    canMatch: [authGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/user/user.module').then(m=>m.UserModule),
    // title: 'PROFILE',
    canActivate: [authGuard]
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./components/wishlist/wishlist.component').then(c=>c.WishlistComponent),
    title: 'WISHLIST',
    canActivate:  [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'LOGIN',
    canActivate:  [loginGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'SIGNUP',
    canActivate:  [loginGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'FORGOT PASSWORD',
    canActivate:  [loginGuard]
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(c => c.NotFoundComponent),
    title: 'NOT FOUND'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      // enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
