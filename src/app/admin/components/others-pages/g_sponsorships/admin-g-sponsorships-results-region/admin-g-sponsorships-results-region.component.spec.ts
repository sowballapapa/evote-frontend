import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsResultsRegionComponent } from './admin-g-sponsorships-results-region.component';

describe('AdminGSponsorshipsResultsRegionComponent', () => {
  let component: AdminGSponsorshipsResultsRegionComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsResultsRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsResultsRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsResultsRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
