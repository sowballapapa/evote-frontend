import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateElectorsComponent } from './candidate-electors.component';

describe('CandidateElectorsComponent', () => {
  let component: CandidateElectorsComponent;
  let fixture: ComponentFixture<CandidateElectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateElectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateElectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
