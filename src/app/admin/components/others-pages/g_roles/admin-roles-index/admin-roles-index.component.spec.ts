import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesIndexComponent } from './admin-roles-index.component';

describe('AdminRolesIndexComponent', () => {
  let component: AdminRolesIndexComponent;
  let fixture: ComponentFixture<AdminRolesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRolesIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRolesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
