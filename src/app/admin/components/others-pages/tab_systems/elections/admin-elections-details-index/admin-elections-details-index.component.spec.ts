import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectionsDetailsIndexComponent } from './admin-elections-details-index.component';

describe('AdminElectionsDetailsIndexComponent', () => {
  let component: AdminElectionsDetailsIndexComponent;
  let fixture: ComponentFixture<AdminElectionsDetailsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectionsDetailsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectionsDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
