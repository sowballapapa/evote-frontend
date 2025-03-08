import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorFooterComponent } from './elector-footer.component';

describe('ElectorFooterComponent', () => {
  let component: ElectorFooterComponent;
  let fixture: ComponentFixture<ElectorFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectorFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
