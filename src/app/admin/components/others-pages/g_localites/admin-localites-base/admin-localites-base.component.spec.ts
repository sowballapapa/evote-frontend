import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocalitesBaseComponent } from './admin-localites-base.component';

describe('AdminLocalitesBaseComponent', () => {
  let component: AdminLocalitesBaseComponent;
  let fixture: ComponentFixture<AdminLocalitesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLocalitesBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLocalitesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
