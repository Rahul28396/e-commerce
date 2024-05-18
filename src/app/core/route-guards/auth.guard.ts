import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  const isUserLoggedIn = authService.isUserLoggedIn();
  
  return  isUserLoggedIn ? true : router.navigateByUrl('/login');
};
