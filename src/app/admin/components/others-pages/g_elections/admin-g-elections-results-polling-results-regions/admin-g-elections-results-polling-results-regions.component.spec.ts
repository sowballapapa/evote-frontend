import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGElectionsResultsPollingResultsRegionsComponent } from './admin-g-elections-results-polling-results-regions.component';

describe('AdminGElectionsResultsPollingResultsRegionsComponent', () => {
  let component: AdminGElectionsResultsPollingResultsRegionsComponent;
  let fixture: ComponentFixture<AdminGElectionsResultsPollingResultsRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGElectionsResultsPollingResultsRegionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGElectionsResultsPollingResultsRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
