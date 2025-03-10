import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesBaseComponent } from './admin-roles-base.component';

describe('AdminRolesBaseComponent', () => {
  let component: AdminRolesBaseComponent;
  let fixture: ComponentFixture<AdminRolesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRolesBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRolesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
