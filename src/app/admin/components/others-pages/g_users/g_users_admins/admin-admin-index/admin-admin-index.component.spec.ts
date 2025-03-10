import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminIndexComponent } from './admin-admin-index.component';

describe('AdminAdminIndexComponent', () => {
  let component: AdminAdminIndexComponent;
  let fixture: ComponentFixture<AdminAdminIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdminIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdminIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
