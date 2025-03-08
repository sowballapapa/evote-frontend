import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSearchElectorComponent } from './candidate-search-elector.component';

describe('CandidateSearchElectorComponent', () => {
  let component: CandidateSearchElectorComponent;
  let fixture: ComponentFixture<CandidateSearchElectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateSearchElectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateSearchElectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
