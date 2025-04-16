import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewUserAdminComponent } from './admin-new-user-admin.component';

describe('AdminNewUserAdminComponent', () => {
  let component: AdminNewUserAdminComponent;
  let fixture: ComponentFixture<AdminNewUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNewUserAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
