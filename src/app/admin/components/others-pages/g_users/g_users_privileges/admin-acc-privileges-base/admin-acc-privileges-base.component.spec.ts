import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPrivilegesBaseComponent } from './admin-acc-privileges-base.component';

describe('AdminAccPrivilegesBaseComponent', () => {
  let component: AdminAccPrivilegesBaseComponent;
  let fixture: ComponentFixture<AdminAccPrivilegesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPrivilegesBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPrivilegesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
