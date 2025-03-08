import { TestBed } from '@angular/core/testing';

import { DgeInfosService } from './dge-infos.service';

describe('DgeInfosService', () => {
  let service: DgeInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgeInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
