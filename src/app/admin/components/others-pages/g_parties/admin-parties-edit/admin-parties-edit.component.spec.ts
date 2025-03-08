import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartiesEditComponent } from './admin-parties-edit.component';

describe('AdminPartiesEditComponent', () => {
  let component: AdminPartiesEditComponent;
  let fixture: ComponentFixture<AdminPartiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPartiesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
