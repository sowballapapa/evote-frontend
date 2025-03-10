import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccCandidatesCreateComponent } from './admin-acc-candidates-create.component';

describe('AdminAccCandidatesCreateComponent', () => {
  let component: AdminAccCandidatesCreateComponent;
  let fixture: ComponentFixture<AdminAccCandidatesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccCandidatesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccCandidatesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
