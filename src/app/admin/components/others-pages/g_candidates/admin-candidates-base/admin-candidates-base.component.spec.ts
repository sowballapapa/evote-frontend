import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCandidatesBaseComponent } from './admin-candidates-base.component';

describe('AdminCandidatesBaseComponent', () => {
  let component: AdminCandidatesBaseComponent;
  let fixture: ComponentFixture<AdminCandidatesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCandidatesBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCandidatesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
