import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPollingsBaseComponent } from './admin-pollings-base.component';

describe('AdminPollingsBaseComponent', () => {
  let component: AdminPollingsBaseComponent;
  let fixture: ComponentFixture<AdminPollingsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPollingsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPollingsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
