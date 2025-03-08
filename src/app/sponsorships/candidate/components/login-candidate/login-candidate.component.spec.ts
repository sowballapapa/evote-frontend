import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCandidateComponent } from './login-candidate.component';

describe('LoginCandidateComponent', () => {
  let component: LoginCandidateComponent;
  let fixture: ComponentFixture<LoginCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
