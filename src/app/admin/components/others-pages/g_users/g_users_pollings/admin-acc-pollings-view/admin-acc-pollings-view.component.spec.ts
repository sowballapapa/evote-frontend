import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPollingsViewComponent } from './admin-acc-pollings-view.component';

describe('AdminAccPollingsViewComponent', () => {
  let component: AdminAccPollingsViewComponent;
  let fixture: ComponentFixture<AdminAccPollingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPollingsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPollingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
