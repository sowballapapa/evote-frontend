import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminCreateComponent } from './admin-admin-create.component';

describe('AdminAdminCreateComponent', () => {
  let component: AdminAdminCreateComponent;
  let fixture: ComponentFixture<AdminAdminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdminCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
