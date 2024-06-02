import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent } from './plan-tham-dinh-companies-company-info-don-vi-dong-goi.component';

describe('PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent', () => {
  let component: PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
