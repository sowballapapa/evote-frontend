import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionsBaseComponent } from './elections-base.component';

describe('ElectionsBaseComponent', () => {
  let component: ElectionsBaseComponent;
  let fixture: ComponentFixture<ElectionsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionsBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
