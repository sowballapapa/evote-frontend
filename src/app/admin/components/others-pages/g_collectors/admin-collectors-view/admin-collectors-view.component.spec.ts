import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectorsViewComponent } from './admin-collectors-view.component';

describe('AdminCollectorsViewComponent', () => {
  let component: AdminCollectorsViewComponent;
  let fixture: ComponentFixture<AdminCollectorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCollectorsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCollectorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
