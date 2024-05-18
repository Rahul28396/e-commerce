import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  const isUserLoggedIn = authService.isUserLoggedIn();
  
  return  !isUserLoggedIn ? true : router.navigateByUrl('/');
};
