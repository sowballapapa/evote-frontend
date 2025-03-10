import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartiesBaseComponent } from './admin-parties-base.component';

describe('AdminPartiesBaseComponent', () => {
  let component: AdminPartiesBaseComponent;
  let fixture: ComponentFixture<AdminPartiesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPartiesBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartiesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
