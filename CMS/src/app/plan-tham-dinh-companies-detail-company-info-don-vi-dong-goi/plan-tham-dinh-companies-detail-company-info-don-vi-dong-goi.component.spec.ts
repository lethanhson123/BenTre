import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent } from './plan-tham-dinh-companies-detail-company-info-don-vi-dong-goi.component';

describe('PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent', () => {
  let component: PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
