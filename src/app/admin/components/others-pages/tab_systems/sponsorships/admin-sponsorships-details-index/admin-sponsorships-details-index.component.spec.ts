import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSponsorshipsDetailsIndexComponent } from './admin-sponsorships-details-index.component';

describe('AdminSponsorshipsDetailsIndexComponent', () => {
  let component: AdminSponsorshipsDetailsIndexComponent;
  let fixture: ComponentFixture<AdminSponsorshipsDetailsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSponsorshipsDetailsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSponsorshipsDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
