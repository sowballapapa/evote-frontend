import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectorsCreateComponent } from './admin-electors-create.component';

describe('AdminElectorsCreateComponent', () => {
  let component: AdminElectorsCreateComponent;
  let fixture: ComponentFixture<AdminElectorsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectorsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
