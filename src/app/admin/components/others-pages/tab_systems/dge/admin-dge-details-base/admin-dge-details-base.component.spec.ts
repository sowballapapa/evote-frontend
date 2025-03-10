import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDgeDetailsBaseComponent } from './admin-dge-details-base.component';

describe('AdminDgeDetailsBaseComponent', () => {
  let component: AdminDgeDetailsBaseComponent;
  let fixture: ComponentFixture<AdminDgeDetailsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDgeDetailsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDgeDetailsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
