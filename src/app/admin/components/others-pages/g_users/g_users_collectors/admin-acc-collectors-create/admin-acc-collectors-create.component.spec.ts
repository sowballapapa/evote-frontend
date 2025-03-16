import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCollectorsCreateComponent } from './admin-acc-collectors-create.component';

describe('AdminAccCollectorsCreateComponent', () => {
  let component: AdminAccCollectorsCreateComponent;
  let fixture: ComponentFixture<AdminAccCollectorsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCollectorsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCollectorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
