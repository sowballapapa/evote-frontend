import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsParticipationsComponent } from './admin-g-sponsorships-participations.component';

describe('AdminGSponsorshipsParticipationsComponent', () => {
  let component: AdminGSponsorshipsParticipationsComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsParticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsParticipationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
