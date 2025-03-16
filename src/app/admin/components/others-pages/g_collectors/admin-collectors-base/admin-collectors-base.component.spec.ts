import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectorsBaseComponent } from './admin-collectors-base.component';

describe('AdminCollectorsBaseComponent', () => {
  let component: AdminCollectorsBaseComponent;
  let fixture: ComponentFixture<AdminCollectorsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCollectorsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCollectorsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
