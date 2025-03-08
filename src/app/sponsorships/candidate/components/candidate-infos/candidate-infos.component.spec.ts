import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInfosComponent } from './candidate-infos.component';

describe('CandidateInfosComponent', () => {
  let component: CandidateInfosComponent;
  let fixture: ComponentFixture<CandidateInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
