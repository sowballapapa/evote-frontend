import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGSponsorshipsConfigComponent } from './admin-g-sponsorships-config.component';

describe('AdminGSponsorshipsConfigComponent', () => {
  let component: AdminGSponsorshipsConfigComponent;
  let fixture: ComponentFixture<AdminGSponsorshipsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGSponsorshipsConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGSponsorshipsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
