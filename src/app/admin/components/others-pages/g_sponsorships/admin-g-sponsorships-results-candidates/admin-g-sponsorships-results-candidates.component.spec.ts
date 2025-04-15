import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsResultsCandidatesComponent } from './admin-g-sponsorships-results-candidates.component';

describe('AdminGSponsorshipsResultsCandidatesComponent', () => {
  let component: AdminGSponsorshipsResultsCandidatesComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsResultsCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsResultsCandidatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsResultsCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
