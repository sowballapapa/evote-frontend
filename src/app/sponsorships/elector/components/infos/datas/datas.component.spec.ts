import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasComponent } from './datas.component';

describe('DatasComponent', () => {
  let component: DatasComponent;
  let fixture: ComponentFixture<DatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
