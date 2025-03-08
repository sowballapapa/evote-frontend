import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipsBaseComponent } from './sponsorships-base.component';

describe('SponsorshipsBaseComponent', () => {
  let component: SponsorshipsBaseComponent;
  let fixture: ComponentFixture<SponsorshipsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorshipsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorshipsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
