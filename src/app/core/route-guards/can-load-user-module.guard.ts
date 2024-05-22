import { CanMatchFn } from '@angular/router';

export const canLoadUserModuleGuard: CanMatchFn = (route, segments) => {
  return true;
};
