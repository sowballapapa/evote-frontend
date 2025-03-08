import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorRegisterComponent } from './elector-register.component';

describe('ElectorRegisterComponent', () => {
  let component: ElectorRegisterComponent;
  let fixture: ComponentFixture<ElectorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectorRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
