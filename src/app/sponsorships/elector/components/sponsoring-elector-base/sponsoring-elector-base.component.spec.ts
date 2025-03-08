import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoringElectorBaseComponent } from './sponsoring-elector-base.component';

describe('SponsoringElectorBaseComponent', () => {
  let component: SponsoringElectorBaseComponent;
  let fixture: ComponentFixture<SponsoringElectorBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsoringElectorBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsoringElectorBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
