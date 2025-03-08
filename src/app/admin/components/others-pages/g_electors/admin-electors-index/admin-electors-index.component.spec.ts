import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectorsIndexComponent } from './admin-electors-index.component';

describe('AdminElectorsIndexComponent', () => {
  let component: AdminElectorsIndexComponent;
  let fixture: ComponentFixture<AdminElectorsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminElectorsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminElectorsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
