import { TestBed } from '@angular/core/testing';

import { AuthElectorService } from './auth-elector.service';

describe('AuthElectorService', () => {
  let service: AuthElectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthElectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
