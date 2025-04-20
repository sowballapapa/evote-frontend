import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authElectionsGuard } from './auth-elections.guard';

describe('authElectionsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authElectionsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
