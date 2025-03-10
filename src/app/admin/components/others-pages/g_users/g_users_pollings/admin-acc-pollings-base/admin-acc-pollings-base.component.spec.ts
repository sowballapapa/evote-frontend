import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPollingsBaseComponent } from './admin-acc-pollings-base.component';

describe('AdminAccPollingsBaseComponent', () => {
  let component: AdminAccPollingsBaseComponent;
  let fixture: ComponentFixture<AdminAccPollingsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPollingsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPollingsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
