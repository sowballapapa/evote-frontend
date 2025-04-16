import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccViewElementComponent } from './acc-view-element.component';

describe('AccViewElementComponent', () => {
  let component: AccViewElementComponent;
  let fixture: ComponentFixture<AccViewElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccViewElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccViewElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
