import { TestBed } from '@angular/core/testing';

import { DgeUserService } from './dge-user.service';

describe('DgeUserService', () => {
  let service: DgeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
