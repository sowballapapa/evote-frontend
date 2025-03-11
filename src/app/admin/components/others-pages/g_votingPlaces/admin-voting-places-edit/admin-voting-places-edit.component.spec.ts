import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVotingPlacesEditComponent } from './admin-voting-places-edit.component';

describe('AdminVotingPlacesEditComponent', () => {
  let component: AdminVotingPlacesEditComponent;
  let fixture: ComponentFixture<AdminVotingPlacesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVotingPlacesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVotingPlacesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
