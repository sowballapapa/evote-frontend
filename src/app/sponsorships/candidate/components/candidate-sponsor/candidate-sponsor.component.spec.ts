import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSponsorComponent } from './candidate-sponsor.component';

describe('CandidateSponsorComponent', () => {
  let component: CandidateSponsorComponent;
  let fixture: ComponentFixture<CandidateSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateSponsorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
