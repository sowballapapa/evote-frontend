import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesViewComponent } from './admin-roles-view.component';

describe('AdminRolesViewComponent', () => {
  let component: AdminRolesViewComponent;
  let fixture: ComponentFixture<AdminRolesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRolesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRolesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
