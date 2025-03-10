import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccElectorsEditComponent } from './admin-acc-electors-edit.component';

describe('AdminAccElectorsEditComponent', () => {
  let component: AdminAccElectorsEditComponent;
  let fixture: ComponentFixture<AdminAccElectorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccElectorsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccElectorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
