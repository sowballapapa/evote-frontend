import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSponsorshipsDetailsCreateComponent } from './admin-sponsorships-details-create.component';

describe('AdminSponsorshipsDetailsCreateComponent', () => {
  let component: AdminSponsorshipsDetailsCreateComponent;
  let fixture: ComponentFixture<AdminSponsorshipsDetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSponsorshipsDetailsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSponsorshipsDetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
