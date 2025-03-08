import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPollingsViewComponent } from './admin-pollings-view.component';

describe('AdminPollingsViewComponent', () => {
  let component: AdminPollingsViewComponent;
  let fixture: ComponentFixture<AdminPollingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPollingsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPollingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
