import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElectorsComponent } from './list-electors.component';

describe('ListElectorsComponent', () => {
  let component: ListElectorsComponent;
  let fixture: ComponentFixture<ListElectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListElectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListElectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
