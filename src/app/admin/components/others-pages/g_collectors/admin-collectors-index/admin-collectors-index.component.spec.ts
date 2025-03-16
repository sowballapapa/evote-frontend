import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectorsIndexComponent } from './admin-collectors-index.component';

describe('AdminCollectorsIndexComponent', () => {
  let component: AdminCollectorsIndexComponent;
  let fixture: ComponentFixture<AdminCollectorsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCollectorsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCollectorsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
