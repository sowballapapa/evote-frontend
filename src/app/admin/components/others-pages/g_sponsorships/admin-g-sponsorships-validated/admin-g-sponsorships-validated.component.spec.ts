import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsValidatedComponent } from './admin-g-sponsorships-validated.component';

describe('AdminGSponsorshipsValidatedComponent', () => {
  let component: AdminGSponsorshipsValidatedComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsValidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsValidatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
