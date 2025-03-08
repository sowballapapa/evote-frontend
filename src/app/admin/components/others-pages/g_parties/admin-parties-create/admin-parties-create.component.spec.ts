import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartiesCreateComponent } from './admin-parties-create.component';

describe('AdminPartiesCreateComponent', () => {
  let component: AdminPartiesCreateComponent;
  let fixture: ComponentFixture<AdminPartiesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPartiesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
