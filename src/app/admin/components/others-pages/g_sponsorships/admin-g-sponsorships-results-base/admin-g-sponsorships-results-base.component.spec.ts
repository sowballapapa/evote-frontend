import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsResultsBaseComponent } from './admin-g-sponsorships-results-base.component';

describe('AdminGSponsorshipsResultsBaseComponent', () => {
  let component: AdminGSponsorshipsResultsBaseComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsResultsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsResultsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsResultsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
