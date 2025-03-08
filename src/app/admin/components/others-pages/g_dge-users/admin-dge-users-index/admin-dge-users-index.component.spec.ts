import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeUsersIndexComponent } from './admin-dge-users-index.component';

describe('AdminDgeUsersIndexComponent', () => {
  let component: AdminDgeUsersIndexComponent;
  let fixture: ComponentFixture<AdminDgeUsersIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeUsersIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeUsersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
