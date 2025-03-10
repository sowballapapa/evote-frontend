import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPrivilegesCreateComponent } from './admin-acc-privileges-create.component';

describe('AdminAccPrivilegesCreateComponent', () => {
  let component: AdminAccPrivilegesCreateComponent;
  let fixture: ComponentFixture<AdminAccPrivilegesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPrivilegesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPrivilegesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
