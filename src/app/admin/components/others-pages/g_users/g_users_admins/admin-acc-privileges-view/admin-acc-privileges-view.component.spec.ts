import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPrivilegesViewComponent } from './admin-acc-privileges-view.component';

describe('AdminAccPrivilegesViewComponent', () => {
  let component: AdminAccPrivilegesViewComponent;
  let fixture: ComponentFixture<AdminAccPrivilegesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPrivilegesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPrivilegesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
