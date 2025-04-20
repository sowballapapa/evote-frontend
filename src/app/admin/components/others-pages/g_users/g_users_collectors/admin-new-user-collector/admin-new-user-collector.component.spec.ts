import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewUserCollectorComponent } from './admin-new-user-collector.component';

describe('AdminNewUserCollectorComponent', () => {
  let component: AdminNewUserCollectorComponent;
  let fixture: ComponentFixture<AdminNewUserCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNewUserCollectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewUserCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
