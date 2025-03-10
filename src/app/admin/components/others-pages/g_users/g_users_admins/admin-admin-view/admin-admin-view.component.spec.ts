import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminViewComponent } from './admin-admin-view.component';

describe('AdminAdminViewComponent', () => {
  let component: AdminAdminViewComponent;
  let fixture: ComponentFixture<AdminAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdminViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
