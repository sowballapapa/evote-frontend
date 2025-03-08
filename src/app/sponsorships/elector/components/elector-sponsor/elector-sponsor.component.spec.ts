import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorSponsorComponent } from './elector-sponsor.component';

describe('ElectorSponsorComponent', () => {
  let component: ElectorSponsorComponent;
  let fixture: ComponentFixture<ElectorSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectorSponsorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectorSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
