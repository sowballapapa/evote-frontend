import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserDatasComponent } from './get-user-datas.component';

describe('GetUserDatasComponent', () => {
  let component: GetUserDatasComponent;
  let fixture: ComponentFixture<GetUserDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUserDatasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUserDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
