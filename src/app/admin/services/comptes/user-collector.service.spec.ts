import { TestBed } from '@angular/core/testing';

import { UserCollectorService } from './user-collector.service';

describe('UserCollectorService', () => {
  let service: UserCollectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCollectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
