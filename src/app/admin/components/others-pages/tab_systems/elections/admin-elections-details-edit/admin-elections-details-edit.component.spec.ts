import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectionsDetailsEditComponent } from './admin-elections-details-edit.component';

describe('AdminElectionsDetailsEditComponent', () => {
  let component: AdminElectionsDetailsEditComponent;
  let fixture: ComponentFixture<AdminElectionsDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectionsDetailsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectionsDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
