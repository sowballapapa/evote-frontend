import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartiesIndexComponent } from './admin-parties-index.component';

describe('AdminPartiesIndexComponent', () => {
  let component: AdminPartiesIndexComponent;
  let fixture: ComponentFixture<AdminPartiesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPartiesIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartiesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
