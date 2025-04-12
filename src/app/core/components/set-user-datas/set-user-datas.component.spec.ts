import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUserDatasComponent } from './set-user-datas.component';

describe('SetUserDatasComponent', () => {
  let component: SetUserDatasComponent;
  let fixture: ComponentFixture<SetUserDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetUserDatasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUserDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
