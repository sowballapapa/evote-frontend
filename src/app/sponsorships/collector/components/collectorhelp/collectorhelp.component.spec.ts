import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorhelpComponent } from './collectorhelp.component';

describe('CollectorhelpComponent', () => {
  let component: CollectorhelpComponent;
  let fixture: ComponentFixture<CollectorhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorhelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
