import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingElectorComponent } from './polling-elector.component';

describe('PollingElectorComponent', () => {
  let component: PollingElectorComponent;
  let fixture: ComponentFixture<PollingElectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollingElectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingElectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
