import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccElectorsViewComponent } from './admin-acc-electors-view.component';

describe('AdminAccElectorsViewComponent', () => {
  let component: AdminAccElectorsViewComponent;
  let fixture: ComponentFixture<AdminAccElectorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccElectorsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccElectorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
