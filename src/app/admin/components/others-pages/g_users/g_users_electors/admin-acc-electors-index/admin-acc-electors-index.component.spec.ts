import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccElectorsIndexComponent } from './admin-acc-electors-index.component';

describe('AdminAccElectorsIndexComponent', () => {
  let component: AdminAccElectorsIndexComponent;
  let fixture: ComponentFixture<AdminAccElectorsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccElectorsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccElectorsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
