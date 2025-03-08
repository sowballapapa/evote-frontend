import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSystemeHomeComponent } from './admin-systeme-home.component';

describe('AdminSystemeHomeComponent', () => {
  let component: AdminSystemeHomeComponent;
  let fixture: ComponentFixture<AdminSystemeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSystemeHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSystemeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
