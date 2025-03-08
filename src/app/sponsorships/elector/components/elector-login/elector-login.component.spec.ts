import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorLoginComponent } from './elector-login.component';

describe('ElectorLoginComponent', () => {
  let component: ElectorLoginComponent;
  let fixture: ComponentFixture<ElectorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectorLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
