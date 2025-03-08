import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectorsEditComponent } from './admin-electors-edit.component';

describe('AdminElectorsEditComponent', () => {
  let component: AdminElectorsEditComponent;
  let fixture: ComponentFixture<AdminElectorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectorsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
