import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsResultsRegionsComponent } from './admin-g-sponsorships-results-regions.component';

describe('AdminGSponsorshipsResultsRegionsComponent', () => {
  let component: AdminGSponsorshipsResultsRegionsComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsResultsRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsResultsRegionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsResultsRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
