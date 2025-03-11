import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVotingPlacesBaseComponent } from './admin-voting-places-base.component';

describe('AdminVotingPlacesBaseComponent', () => {
  let component: AdminVotingPlacesBaseComponent;
  let fixture: ComponentFixture<AdminVotingPlacesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVotingPlacesBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVotingPlacesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
