import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeDetailsViewComponent } from './admin-dge-details-view.component';

describe('AdminDgeDetailsViewComponent', () => {
  let component: AdminDgeDetailsViewComponent;
  let fixture: ComponentFixture<AdminDgeDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeDetailsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
