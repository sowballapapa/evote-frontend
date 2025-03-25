import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrainerComponent } from './parrainer.component';

describe('ParrainerComponent', () => {
  let component: ParrainerComponent;
  let fixture: ComponentFixture<ParrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
