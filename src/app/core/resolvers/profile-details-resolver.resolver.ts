import { ResolveFn, Router } from '@angular/router';
import { User } from '../models/user.model';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { EMPTY, mergeMap, of } from 'rxjs';

export const profileDetailsResolver: ResolveFn<User> = (route, state) => {

  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.getLoggedInUserDetails<User>().pipe(mergeMap(data => {
    if (data) {
      return of(data);
    } else {
      router.navigate(['/not-found']);
      return EMPTY;
    }
  }));
};
