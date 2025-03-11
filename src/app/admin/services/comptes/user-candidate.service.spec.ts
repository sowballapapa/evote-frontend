import { TestBed } from '@angular/core/testing';

import { UserCandidateService } from './user-candidate.service';

describe('UserCandidateService', () => {
  let service: UserCandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
