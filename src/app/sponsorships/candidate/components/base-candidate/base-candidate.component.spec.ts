import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCandidateComponent } from './base-candidate.component';

describe('BaseCandidateComponent', () => {
  let component: BaseCandidateComponent;
  let fixture: ComponentFixture<BaseCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
