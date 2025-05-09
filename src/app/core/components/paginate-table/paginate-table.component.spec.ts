import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateTableComponent } from './paginate-table.component';

describe('PaginateTableComponent', () => {
  let component: PaginateTableComponent;
  let fixture: ComponentFixture<PaginateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginateTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
