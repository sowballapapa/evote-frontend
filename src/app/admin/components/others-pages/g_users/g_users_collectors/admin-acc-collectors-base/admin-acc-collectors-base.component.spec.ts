import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCollectorsBaseComponent } from './admin-acc-collectors-base.component';

describe('AdminAccCollectorsBaseComponent', () => {
  let component: AdminAccCollectorsBaseComponent;
  let fixture: ComponentFixture<AdminAccCollectorsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCollectorsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCollectorsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
