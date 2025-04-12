import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCniDatasComponent } from './get-cni-datas.component';

describe('GetCniDatasComponent', () => {
  let component: GetCniDatasComponent;
  let fixture: ComponentFixture<GetCniDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCniDatasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCniDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
