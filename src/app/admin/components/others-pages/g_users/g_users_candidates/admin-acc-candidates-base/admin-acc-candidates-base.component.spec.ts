import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCandidatesBaseComponent } from './admin-acc-candidates-base.component';

describe('AdminAccCandidatesBaseComponent', () => {
  let component: AdminAccCandidatesBaseComponent;
  let fixture: ComponentFixture<AdminAccCandidatesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCandidatesBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCandidatesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
