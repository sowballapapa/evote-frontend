import { TestBed } from '@angular/core/testing';

import { AuthPollingStationService } from './auth-polling-station.service';

describe('AuthPollingStationService', () => {
  let service: AuthPollingStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPollingStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
