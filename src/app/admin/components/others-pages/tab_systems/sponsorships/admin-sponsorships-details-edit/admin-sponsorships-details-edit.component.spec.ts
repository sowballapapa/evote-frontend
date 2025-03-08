import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSponsorshipsDetailsEditComponent } from './admin-sponsorships-details-edit.component';

describe('AdminSponsorshipsDetailsEditComponent', () => {
  let component: AdminSponsorshipsDetailsEditComponent;
  let fixture: ComponentFixture<AdminSponsorshipsDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSponsorshipsDetailsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSponsorshipsDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
