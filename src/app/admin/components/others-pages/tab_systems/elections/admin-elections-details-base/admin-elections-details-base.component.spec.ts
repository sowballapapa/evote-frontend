import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectionsDetailsBaseComponent } from './admin-elections-details-base.component';

describe('AdminElectionsDetailsBaseComponent', () => {
  let component: AdminElectionsDetailsBaseComponent;
  let fixture: ComponentFixture<AdminElectionsDetailsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectionsDetailsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectionsDetailsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
