import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersBaseComponent } from './admin-users-base.component';

describe('AdminUsersBaseComponent', () => {
  let component: AdminUsersBaseComponent;
  let fixture: ComponentFixture<AdminUsersBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsersBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
