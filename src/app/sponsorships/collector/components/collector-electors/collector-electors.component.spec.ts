import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorElectorsComponent } from './collector-electors.component';

describe('CollectorElectorsComponent', () => {
  let component: CollectorElectorsComponent;
  let fixture: ComponentFixture<CollectorElectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorElectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorElectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
