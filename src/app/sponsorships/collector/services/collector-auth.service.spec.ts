import { TestBed } from '@angular/core/testing';

import { CollectorAuthService } from './collector-auth.service';

describe('CollectorAuthService', () => {
  let service: CollectorAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectorAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
