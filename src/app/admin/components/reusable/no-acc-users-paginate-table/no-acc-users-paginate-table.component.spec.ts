import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAccUsersPaginateTableComponent } from './no-acc-users-paginate-table.component';

describe('NoAccUsersPaginateTableComponent', () => {
  let component: NoAccUsersPaginateTableComponent;
  let fixture: ComponentFixture<NoAccUsersPaginateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoAccUsersPaginateTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAccUsersPaginateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
