import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCandidatesViewComponent } from './admin-candidates-view.component';

describe('AdminCandidatesViewComponent', () => {
  let component: AdminCandidatesViewComponent;
  let fixture: ComponentFixture<AdminCandidatesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCandidatesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCandidatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
