import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVotingPlacesViewComponent } from './admin-voting-places-view.component';

describe('AdminVotingPlacesViewComponent', () => {
  let component: AdminVotingPlacesViewComponent;
  let fixture: ComponentFixture<AdminVotingPlacesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVotingPlacesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVotingPlacesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
