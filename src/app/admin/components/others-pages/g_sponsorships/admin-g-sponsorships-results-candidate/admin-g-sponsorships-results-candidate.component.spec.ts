import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsResultsCandidateComponent } from './admin-g-sponsorships-results-candidate.component';

describe('AdminGSponsorshipsResultsCandidateComponent', () => {
  let component: AdminGSponsorshipsResultsCandidateComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsResultsCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsResultsCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsResultsCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
