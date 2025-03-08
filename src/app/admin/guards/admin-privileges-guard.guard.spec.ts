import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminPrivilegesGuardGuard } from './admin-privileges-guard.guard';

describe('adminPrivilegesGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminPrivilegesGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
