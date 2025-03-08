import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCandidatesIndexComponent } from './admin-candidates-index.component';

describe('AdminCandidatesIndexComponent', () => {
  let component: AdminCandidatesIndexComponent;
  let fixture: ComponentFixture<AdminCandidatesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCandidatesIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCandidatesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
