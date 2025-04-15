import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGElectionsResultsCandidatesComponent } from './admin-g-elections-results-candidates.component';

describe('AdminGElectionsResultsCandidatesComponent', () => {
  let component: AdminGElectionsResultsCandidatesComponent;
  let fixture: ComponentFixture<AdminGElectionsResultsCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGElectionsResultsCandidatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGElectionsResultsCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
