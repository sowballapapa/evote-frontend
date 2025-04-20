import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewUserCandidateComponent } from './admin-new-user-candidate.component';

describe('AdminNewUserCandidateComponent', () => {
  let component: AdminNewUserCandidateComponent;
  let fixture: ComponentFixture<AdminNewUserCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNewUserCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewUserCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
