import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCollectorsIndexComponent } from './admin-acc-collectors-index.component';

describe('AdminAccCollectorsIndexComponent', () => {
  let component: AdminAccCollectorsIndexComponent;
  let fixture: ComponentFixture<AdminAccCollectorsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCollectorsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCollectorsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
