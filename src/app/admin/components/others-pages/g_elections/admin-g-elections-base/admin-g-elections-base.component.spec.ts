import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGElectionsBaseComponent } from './admin-g-elections-base.component';

describe('AdminGElectionsBaseComponent', () => {
  let component: AdminGElectionsBaseComponent;
  let fixture: ComponentFixture<AdminGElectionsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGElectionsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGElectionsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
