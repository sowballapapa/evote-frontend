import { TestBed } from '@angular/core/testing';

import { UserElectorService } from './user-elector.service';

describe('UserElectorService', () => {
  let service: UserElectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserElectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
