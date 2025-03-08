import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorHomeComponent } from './elector-home.component';

describe('ElectorHomeComponent', () => {
  let component: ElectorHomeComponent;
  let fixture: ComponentFixture<ElectorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectorHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
