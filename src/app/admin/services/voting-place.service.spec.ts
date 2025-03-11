import { TestBed } from '@angular/core/testing';

import { VotingPlaceService } from './voting-place.service';

describe('VotingPlaceService', () => {
  let service: VotingPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
