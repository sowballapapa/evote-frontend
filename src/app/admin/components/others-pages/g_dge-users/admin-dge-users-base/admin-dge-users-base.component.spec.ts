import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeUsersBaseComponent } from './admin-dge-users-base.component';

describe('AdminDgeUsersBaseComponent', () => {
  let component: AdminDgeUsersBaseComponent;
  let fixture: ComponentFixture<AdminDgeUsersBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeUsersBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeUsersBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
