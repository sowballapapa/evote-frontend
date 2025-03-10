import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCandidatesViewComponent } from './admin-acc-candidates-view.component';

describe('AdminAccCandidatesViewComponent', () => {
  let component: AdminAccCandidatesViewComponent;
  let fixture: ComponentFixture<AdminAccCandidatesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCandidatesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCandidatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
