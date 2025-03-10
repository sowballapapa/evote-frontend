import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminBaseComponent } from './admin-admin-base.component';

describe('AdminAdminBaseComponent', () => {
  let component: AdminAdminBaseComponent;
  let fixture: ComponentFixture<AdminAdminBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdminBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdminBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
