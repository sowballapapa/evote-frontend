import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsHomeComponent } from './admin-g-sponsorships-home.component';

describe('AdminGSponsorshipsHomeComponent', () => {
  let component: AdminGSponsorshipsHomeComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
