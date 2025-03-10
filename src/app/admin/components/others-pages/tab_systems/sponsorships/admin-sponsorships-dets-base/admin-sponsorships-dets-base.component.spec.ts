import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSponsorshipsDetsBaseComponent } from './admin-sponsorships-dets-base.component';

describe('AdminSponsorshipsDetsBaseComponent', () => {
  let component: AdminSponsorshipsDetsBaseComponent;
  let fixture: ComponentFixture<AdminSponsorshipsDetsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSponsorshipsDetsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSponsorshipsDetsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
