import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesCreateComponent } from './admin-roles-create.component';

describe('AdminRolesCreateComponent', () => {
  let component: AdminRolesCreateComponent;
  let fixture: ComponentFixture<AdminRolesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRolesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRolesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
