import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewUserPollingComponent } from './admin-new-user-polling.component';

describe('AdminNewUserPollingComponent', () => {
  let component: AdminNewUserPollingComponent;
  let fixture: ComponentFixture<AdminNewUserPollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNewUserPollingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewUserPollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
