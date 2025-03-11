import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVotingPlacesIndexComponent } from './admin-voting-places-index.component';

describe('AdminVotingPlacesIndexComponent', () => {
  let component: AdminVotingPlacesIndexComponent;
  let fixture: ComponentFixture<AdminVotingPlacesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVotingPlacesIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVotingPlacesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
