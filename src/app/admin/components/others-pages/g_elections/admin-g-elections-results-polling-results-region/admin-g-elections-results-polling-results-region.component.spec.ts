import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGElectionsResultsPollingResultsRegionComponent } from './admin-g-elections-results-polling-results-region.component';

describe('AdminGElectionsResultsPollingResultsRegionComponent', () => {
  let component: AdminGElectionsResultsPollingResultsRegionComponent;
  let fixture: ComponentFixture<AdminGElectionsResultsPollingResultsRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGElectionsResultsPollingResultsRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGElectionsResultsPollingResultsRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
