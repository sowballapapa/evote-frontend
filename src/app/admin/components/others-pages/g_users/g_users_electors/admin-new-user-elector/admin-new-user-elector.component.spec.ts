import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewUserElectorComponent } from './admin-new-user-elector.component';

describe('AdminNewUserElectorComponent', () => {
  let component: AdminNewUserElectorComponent;
  let fixture: ComponentFixture<AdminNewUserElectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNewUserElectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewUserElectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
