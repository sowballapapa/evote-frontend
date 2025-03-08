import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectionsDetailsViewComponent } from './admin-elections-details-view.component';

describe('AdminElectionsDetailsViewComponent', () => {
  let component: AdminElectionsDetailsViewComponent;
  let fixture: ComponentFixture<AdminElectionsDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectionsDetailsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectionsDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
