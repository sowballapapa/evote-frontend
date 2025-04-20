import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollNavbarComponent } from './poll-navbar.component';

describe('PollNavbarComponent', () => {
  let component: PollNavbarComponent;
  let fixture: ComponentFixture<PollNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
