import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesEditComponent } from './admin-roles-edit.component';

describe('AdminRolesEditComponent', () => {
  let component: AdminRolesEditComponent;
  let fixture: ComponentFixture<AdminRolesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRolesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRolesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
