import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVotingPlacesViewBaseComponent } from './admin-voting-places-view-base.component';

describe('AdminVotingPlacesViewBaseComponent', () => {
  let component: AdminVotingPlacesViewBaseComponent;
  let fixture: ComponentFixture<AdminVotingPlacesViewBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVotingPlacesViewBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVotingPlacesViewBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
