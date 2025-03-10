import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGElectionsConfigComponent } from './admin-g-elections-config.component';

describe('AdminGElectionsConfigComponent', () => {
  let component: AdminGElectionsConfigComponent;
  let fixture: ComponentFixture<AdminGElectionsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGElectionsConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGElectionsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
