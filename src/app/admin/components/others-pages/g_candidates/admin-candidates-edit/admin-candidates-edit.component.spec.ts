import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCandidatesEditComponent } from './admin-candidates-edit.component';

describe('AdminCandidatesEditComponent', () => {
  let component: AdminCandidatesEditComponent;
  let fixture: ComponentFixture<AdminCandidatesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCandidatesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCandidatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
