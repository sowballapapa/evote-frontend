import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasUpdateComponent } from './datas-update.component';

describe('DatasUpdateComponent', () => {
  let component: DatasUpdateComponent;
  let fixture: ComponentFixture<DatasUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatasUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
