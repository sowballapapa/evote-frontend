import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCandidatesIndexComponent } from './admin-acc-candidates-index.component';

describe('AdminAccCandidatesIndexComponent', () => {
  let component: AdminAccCandidatesIndexComponent;
  let fixture: ComponentFixture<AdminAccCandidatesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCandidatesIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCandidatesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
