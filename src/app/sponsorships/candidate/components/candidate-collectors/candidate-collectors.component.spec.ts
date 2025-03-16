import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCollectorsComponent } from './candidate-collectors.component';

describe('CandidateCollectorsComponent', () => {
  let component: CandidateCollectorsComponent;
  let fixture: ComponentFixture<CandidateCollectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateCollectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateCollectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
