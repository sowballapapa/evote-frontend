import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchElectorComponent } from './search-elector.component';

describe('SearchElectorComponent', () => {
  let component: SearchElectorComponent;
  let fixture: ComponentFixture<SearchElectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchElectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchElectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
