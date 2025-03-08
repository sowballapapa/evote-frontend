import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartiesViewComponent } from './admin-parties-view.component';

describe('AdminPartiesViewComponent', () => {
  let component: AdminPartiesViewComponent;
  let fixture: ComponentFixture<AdminPartiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPartiesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
