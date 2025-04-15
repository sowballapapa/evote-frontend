import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGElectionsResultsPollingResultsBaseComponent } from './admin-g-elections-results-polling-results-base.component';

describe('AdminGElectionsResultsPollingResultsBaseComponent', () => {
  let component: AdminGElectionsResultsPollingResultsBaseComponent;
  let fixture: ComponentFixture<AdminGElectionsResultsPollingResultsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGElectionsResultsPollingResultsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGElectionsResultsPollingResultsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
