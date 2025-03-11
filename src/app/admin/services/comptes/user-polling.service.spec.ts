import { TestBed } from '@angular/core/testing';

import { UserPollingService } from './user-polling.service';

describe('UserPollingService', () => {
  let service: UserPollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
