import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccElectorsCreateComponent } from './admin-acc-electors-create.component';

describe('AdminAccElectorsCreateComponent', () => {
  let component: AdminAccElectorsCreateComponent;
  let fixture: ComponentFixture<AdminAccElectorsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccElectorsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccElectorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
