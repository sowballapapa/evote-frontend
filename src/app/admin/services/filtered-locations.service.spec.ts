import { TestBed } from '@angular/core/testing';

import { FilteredLocationsService } from './filtered-locations.service';

describe('FilteredLocationsService', () => {
  let service: FilteredLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteredLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
