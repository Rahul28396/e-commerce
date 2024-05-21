import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canComponentDeactivateGuard } from './can-component-deactivate.guard';

describe('canComponentDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canComponentDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
