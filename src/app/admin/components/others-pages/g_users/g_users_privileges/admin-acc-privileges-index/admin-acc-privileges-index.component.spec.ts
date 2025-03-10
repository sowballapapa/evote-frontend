import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPrivilegesIndexComponent } from './admin-acc-privileges-index.component';

describe('AdminAccPrivilegesIndexComponent', () => {
  let component: AdminAccPrivilegesIndexComponent;
  let fixture: ComponentFixture<AdminAccPrivilegesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPrivilegesIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPrivilegesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
