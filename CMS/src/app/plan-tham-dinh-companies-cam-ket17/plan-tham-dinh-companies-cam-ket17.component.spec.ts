import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesCamKet17Component } from './plan-tham-dinh-companies-cam-ket17.component';

describe('PlanThamDinhCompaniesCamKet17Component', () => {
  let component: PlanThamDinhCompaniesCamKet17Component;
  let fixture: ComponentFixture<PlanThamDinhCompaniesCamKet17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesCamKet17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesCamKet17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
