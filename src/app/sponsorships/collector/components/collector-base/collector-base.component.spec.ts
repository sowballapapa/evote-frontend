import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorBaseComponent } from './collector-base.component';

describe('CollectorBaseComponent', () => {
  let component: CollectorBaseComponent;
  let fixture: ComponentFixture<CollectorBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
