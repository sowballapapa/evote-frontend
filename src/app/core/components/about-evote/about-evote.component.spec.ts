import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEvoteComponent } from './about-evote.component';

describe('AboutEvoteComponent', () => {
  let component: AboutEvoteComponent;
  let fixture: ComponentFixture<AboutEvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutEvoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
