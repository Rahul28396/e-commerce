import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { profileDetailsResolverResolver } from './profile-details-resolver.resolver';

describe('profileDetailsResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => profileDetailsResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
