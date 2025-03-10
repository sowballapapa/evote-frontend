import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGElectionsHomeComponent } from './admin-g-elections-home.component';

describe('AdminGElectionsHomeComponent', () => {
  let component: AdminGElectionsHomeComponent;
  let fixture: ComponentFixture<AdminGElectionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGElectionsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGElectionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
