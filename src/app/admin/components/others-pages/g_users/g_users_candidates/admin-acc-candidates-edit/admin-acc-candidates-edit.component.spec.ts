import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCandidatesEditComponent } from './admin-acc-candidates-edit.component';

describe('AdminAccCandidatesEditComponent', () => {
  let component: AdminAccCandidatesEditComponent;
  let fixture: ComponentFixture<AdminAccCandidatesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCandidatesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCandidatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
