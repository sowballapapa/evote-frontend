import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateHelpComponent } from './candidate-help.component';

describe('CandidateHelpComponent', () => {
  let component: CandidateHelpComponent;
  let fixture: ComponentFixture<CandidateHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateHelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
