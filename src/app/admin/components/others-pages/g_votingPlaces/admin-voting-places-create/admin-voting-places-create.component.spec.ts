import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVotingPlacesCreateComponent } from './admin-voting-places-create.component';

describe('AdminVotingPlacesCreateComponent', () => {
  let component: AdminVotingPlacesCreateComponent;
  let fixture: ComponentFixture<AdminVotingPlacesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVotingPlacesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVotingPlacesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
