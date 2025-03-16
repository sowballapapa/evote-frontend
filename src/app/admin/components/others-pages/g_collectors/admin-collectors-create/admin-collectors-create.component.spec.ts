import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectorsCreateComponent } from './admin-collectors-create.component';

describe('AdminCollectorsCreateComponent', () => {
  let component: AdminCollectorsCreateComponent;
  let fixture: ComponentFixture<AdminCollectorsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCollectorsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCollectorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
