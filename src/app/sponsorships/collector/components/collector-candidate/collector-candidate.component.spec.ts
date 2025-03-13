import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorCandidateComponent } from './collector-candidate.component';

describe('CollectorCandidateComponent', () => {
  let component: CollectorCandidateComponent;
  let fixture: ComponentFixture<CollectorCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
