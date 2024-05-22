import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { canLoadUserModuleGuard } from './can-load-user-module.guard';

describe('canLoadUserModuleGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canLoadUserModuleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
