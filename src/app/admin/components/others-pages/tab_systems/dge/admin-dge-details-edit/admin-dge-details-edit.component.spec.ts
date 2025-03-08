import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeDetailsEditComponent } from './admin-dge-details-edit.component';

describe('AdminDgeDetailsEditComponent', () => {
  let component: AdminDgeDetailsEditComponent;
  let fixture: ComponentFixture<AdminDgeDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeDetailsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
