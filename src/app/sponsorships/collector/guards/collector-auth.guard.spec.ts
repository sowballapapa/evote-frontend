import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { collectorAuthGuard } from './collector-auth.guard';

describe('collectorAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => collectorAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
