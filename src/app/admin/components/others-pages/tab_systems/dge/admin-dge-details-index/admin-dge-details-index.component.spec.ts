import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeDetailsIndexComponent } from './admin-dge-details-index.component';

describe('AdminDgeDetailsIndexComponent', () => {
  let component: AdminDgeDetailsIndexComponent;
  let fixture: ComponentFixture<AdminDgeDetailsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeDetailsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
