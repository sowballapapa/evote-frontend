import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorInfosComponent } from './collector-infos.component';

describe('CollectorInfosComponent', () => {
  let component: CollectorInfosComponent;
  let fixture: ComponentFixture<CollectorInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
