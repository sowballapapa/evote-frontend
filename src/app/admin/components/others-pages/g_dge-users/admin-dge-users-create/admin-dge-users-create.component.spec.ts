import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeUsersCreateComponent } from './admin-dge-users-create.component';

describe('AdminDgeUsersCreateComponent', () => {
  let component: AdminDgeUsersCreateComponent;
  let fixture: ComponentFixture<AdminDgeUsersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeUsersCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeUsersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
