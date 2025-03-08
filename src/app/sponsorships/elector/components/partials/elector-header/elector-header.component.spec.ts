import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorHeaderComponent } from './elector-header.component';

describe('ElectorHeaderComponent', () => {
  let component: ElectorHeaderComponent;
  let fixture: ComponentFixture<ElectorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectorHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
