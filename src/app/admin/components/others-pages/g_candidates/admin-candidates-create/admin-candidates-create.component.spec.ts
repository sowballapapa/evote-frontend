import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCandidatesCreateComponent } from './admin-candidates-create.component';

describe('AdminCandidatesCreateComponent', () => {
  let component: AdminCandidatesCreateComponent;
  let fixture: ComponentFixture<AdminCandidatesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCandidatesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCandidatesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
