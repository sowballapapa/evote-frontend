import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPollingsIndexComponent } from './admin-acc-pollings-index.component';

describe('AdminAccPollingsIndexComponent', () => {
  let component: AdminAccPollingsIndexComponent;
  let fixture: ComponentFixture<AdminAccPollingsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPollingsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPollingsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
