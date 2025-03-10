import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectorsBaseComponent } from './admin-electors-base.component';

describe('AdminElectorsBaseComponent', () => {
  let component: AdminElectorsBaseComponent;
  let fixture: ComponentFixture<AdminElectorsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectorsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectorsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
