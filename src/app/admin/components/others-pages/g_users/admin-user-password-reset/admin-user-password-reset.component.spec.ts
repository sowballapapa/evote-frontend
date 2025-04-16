import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserPasswordResetComponent } from './admin-user-password-reset.component';

describe('AdminUserPasswordResetComponent', () => {
  let component: AdminUserPasswordResetComponent;
  let fixture: ComponentFixture<AdminUserPasswordResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserPasswordResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
