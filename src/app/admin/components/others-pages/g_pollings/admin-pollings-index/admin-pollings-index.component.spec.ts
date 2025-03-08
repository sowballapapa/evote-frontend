import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPollingsIndexComponent } from './admin-pollings-index.component';

describe('AdminPollingsIndexComponent', () => {
  let component: AdminPollingsIndexComponent;
  let fixture: ComponentFixture<AdminPollingsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPollingsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPollingsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
