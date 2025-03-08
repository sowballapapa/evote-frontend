import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectionsDetailsCreateComponent } from './admin-elections-details-create.component';

describe('AdminElectionsDetailsCreateComponent', () => {
  let component: AdminElectionsDetailsCreateComponent;
  let fixture: ComponentFixture<AdminElectionsDetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectionsDetailsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectionsDetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
