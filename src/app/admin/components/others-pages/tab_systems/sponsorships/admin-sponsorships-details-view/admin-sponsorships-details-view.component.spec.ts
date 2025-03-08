import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSponsorshipsDetailsViewComponent } from './admin-sponsorships-details-view.component';

describe('AdminSponsorshipsDetailsViewComponent', () => {
  let component: AdminSponsorshipsDetailsViewComponent;
  let fixture: ComponentFixture<AdminSponsorshipsDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSponsorshipsDetailsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSponsorshipsDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
