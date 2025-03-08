import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPollingsCreateComponent } from './admin-pollings-create.component';

describe('AdminPollingsCreateComponent', () => {
  let component: AdminPollingsCreateComponent;
  let fixture: ComponentFixture<AdminPollingsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPollingsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPollingsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
