import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorInfosComponent } from './elector-infos.component';

describe('ElectorInfosComponent', () => {
  let component: ElectorInfosComponent;
  let fixture: ComponentFixture<ElectorInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectorInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectorInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
