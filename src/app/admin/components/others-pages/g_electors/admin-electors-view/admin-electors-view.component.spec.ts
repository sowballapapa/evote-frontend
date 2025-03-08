import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectorsViewComponent } from './admin-electors-view.component';

describe('AdminElectorsViewComponent', () => {
  let component: AdminElectorsViewComponent;
  let fixture: ComponentFixture<AdminElectorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectorsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
