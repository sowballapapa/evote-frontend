import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPollingsEditComponent } from './admin-pollings-edit.component';

describe('AdminPollingsEditComponent', () => {
  let component: AdminPollingsEditComponent;
  let fixture: ComponentFixture<AdminPollingsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPollingsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPollingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
