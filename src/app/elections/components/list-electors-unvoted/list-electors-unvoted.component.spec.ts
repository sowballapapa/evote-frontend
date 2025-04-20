import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElectorsUnvotedComponent } from './list-electors-unvoted.component';

describe('ListElectorsUnvotedComponent', () => {
  let component: ListElectorsUnvotedComponent;
  let fixture: ComponentFixture<ListElectorsUnvotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListElectorsUnvotedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListElectorsUnvotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
