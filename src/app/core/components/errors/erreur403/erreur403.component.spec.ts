import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erreur403Component } from './erreur403.component';

describe('Erreur403Component', () => {
  let component: Erreur403Component;
  let fixture: ComponentFixture<Erreur403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erreur403Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erreur403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
