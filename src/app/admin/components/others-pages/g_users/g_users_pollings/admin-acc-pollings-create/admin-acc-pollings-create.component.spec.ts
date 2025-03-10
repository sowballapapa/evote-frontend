import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccPollingsCreateComponent } from './admin-acc-pollings-create.component';

describe('AdminAccPollingsCreateComponent', () => {
  let component: AdminAccPollingsCreateComponent;
  let fixture: ComponentFixture<AdminAccPollingsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccPollingsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccPollingsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
