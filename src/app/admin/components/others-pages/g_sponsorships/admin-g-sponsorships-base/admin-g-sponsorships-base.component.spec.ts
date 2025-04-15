import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsBaseComponent } from './admin-g-sponsorships-base.component';

describe('AdminGSponsorshipsBaseComponent', () => {
  let component: AdminGSponsorshipsBaseComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
