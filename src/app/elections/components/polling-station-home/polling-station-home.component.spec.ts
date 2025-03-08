import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingStationHomeComponent } from './polling-station-home.component';

describe('PollingStationHomeComponent', () => {
  let component: PollingStationHomeComponent;
  let fixture: ComponentFixture<PollingStationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollingStationHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingStationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
