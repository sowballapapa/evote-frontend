import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { electionsGuard } from './elections.guard';

describe('electionsGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => electionsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
