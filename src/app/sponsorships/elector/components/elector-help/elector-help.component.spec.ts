import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorHelpComponent } from './elector-help.component';

describe('ElectorHelpComponent', () => {
  let component: ElectorHelpComponent;
  let fixture: ComponentFixture<ElectorHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectorHelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectorHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
