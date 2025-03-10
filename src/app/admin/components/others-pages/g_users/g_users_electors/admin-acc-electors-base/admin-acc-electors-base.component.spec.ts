import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccElectorsBaseComponent } from './admin-acc-electors-base.component';

describe('AdminAccElectorsBaseComponent', () => {
  let component: AdminAccElectorsBaseComponent;
  let fixture: ComponentFixture<AdminAccElectorsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccElectorsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccElectorsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
