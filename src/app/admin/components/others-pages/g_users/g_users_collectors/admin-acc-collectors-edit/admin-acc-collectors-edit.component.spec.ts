import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCollectorsEditComponent } from './admin-acc-collectors-edit.component';

describe('AdminAccCollectorsEditComponent', () => {
  let component: AdminAccCollectorsEditComponent;
  let fixture: ComponentFixture<AdminAccCollectorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCollectorsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCollectorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
