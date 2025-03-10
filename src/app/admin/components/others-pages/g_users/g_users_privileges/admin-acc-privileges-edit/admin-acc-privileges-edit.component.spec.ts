import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPrivilegesEditComponent } from './admin-acc-privileges-edit.component';

describe('AdminAccPrivilegesEditComponent', () => {
  let component: AdminAccPrivilegesEditComponent;
  let fixture: ComponentFixture<AdminAccPrivilegesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPrivilegesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPrivilegesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
