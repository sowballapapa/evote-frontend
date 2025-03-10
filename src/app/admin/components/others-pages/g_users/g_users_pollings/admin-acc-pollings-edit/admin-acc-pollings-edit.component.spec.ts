import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPollingsEditComponent } from './admin-acc-pollings-edit.component';

describe('AdminAccPollingsEditComponent', () => {
  let component: AdminAccPollingsEditComponent;
  let fixture: ComponentFixture<AdminAccPollingsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPollingsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPollingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
