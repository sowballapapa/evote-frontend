import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersIndexComponent } from './admin-users-index.component';

describe('AdminUsersIndexComponent', () => {
  let component: AdminUsersIndexComponent;
  let fixture: ComponentFixture<AdminUsersIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
