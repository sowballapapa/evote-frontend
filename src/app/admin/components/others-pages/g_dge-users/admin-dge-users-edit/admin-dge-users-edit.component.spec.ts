import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeUsersEditComponent } from './admin-dge-users-edit.component';

describe('AdminDgeUsersEditComponent', () => {
  let component: AdminDgeUsersEditComponent;
  let fixture: ComponentFixture<AdminDgeUsersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeUsersEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
