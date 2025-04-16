import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccPaginateTableComponent } from './acc-paginate-table.component';

describe('AccPaginateTableComponent', () => {
  let component: AccPaginateTableComponent;
  let fixture: ComponentFixture<AccPaginateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccPaginateTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccPaginateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
