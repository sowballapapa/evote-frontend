import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingStationLoginComponent } from './polling-station-login.component';

describe('PollingStationLoginComponent', () => {
  let component: PollingStationLoginComponent;
  let fixture: ComponentFixture<PollingStationLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollingStationLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingStationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
