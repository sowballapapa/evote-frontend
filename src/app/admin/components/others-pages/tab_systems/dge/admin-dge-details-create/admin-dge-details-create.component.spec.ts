import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeDetailsCreateComponent } from './admin-dge-details-create.component';

describe('AdminDgeDetailsCreateComponent', () => {
  let component: AdminDgeDetailsCreateComponent;
  let fixture: ComponentFixture<AdminDgeDetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeDetailsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeDetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
