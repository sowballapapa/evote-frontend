import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCollectorsViewComponent } from './admin-acc-collectors-view.component';

describe('AdminAccCollectorsViewComponent', () => {
  let component: AdminAccCollectorsViewComponent;
  let fixture: ComponentFixture<AdminAccCollectorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCollectorsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCollectorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
