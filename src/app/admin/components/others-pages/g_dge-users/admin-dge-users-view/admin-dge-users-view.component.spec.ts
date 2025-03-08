import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeUsersViewComponent } from './admin-dge-users-view.component';

describe('AdminDgeUsersViewComponent', () => {
  let component: AdminDgeUsersViewComponent;
  let fixture: ComponentFixture<AdminDgeUsersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeUsersViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
