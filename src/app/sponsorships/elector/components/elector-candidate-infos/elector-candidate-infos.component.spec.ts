import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorCandidateInfosComponent } from './elector-candidate-infos.component';

describe('ElectorCandidateInfosComponent', () => {
  let component: ElectorCandidateInfosComponent;
  let fixture: ComponentFixture<ElectorCandidateInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectorCandidateInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectorCandidateInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
