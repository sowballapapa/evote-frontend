import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGElectionsResultsCandidateComponent } from './admin-g-elections-results-candidate.component';

describe('AdminGElectionsResultsCandidateComponent', () => {
  let component: AdminGElectionsResultsCandidateComponent;
  let fixture: ComponentFixture<AdminGElectionsResultsCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGElectionsResultsCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGElectionsResultsCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
