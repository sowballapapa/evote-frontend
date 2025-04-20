import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElectorsVotedComponent } from './list-electors-voted.component';

describe('ListElectorsVotedComponent', () => {
  let component: ListElectorsVotedComponent;
  let fixture: ComponentFixture<ListElectorsVotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListElectorsVotedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListElectorsVotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
