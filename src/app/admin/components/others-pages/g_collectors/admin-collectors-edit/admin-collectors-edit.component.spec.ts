import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectorsEditComponent } from './admin-collectors-edit.component';

describe('AdminCollectorsEditComponent', () => {
  let component: AdminCollectorsEditComponent;
  let fixture: ComponentFixture<AdminCollectorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCollectorsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCollectorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
