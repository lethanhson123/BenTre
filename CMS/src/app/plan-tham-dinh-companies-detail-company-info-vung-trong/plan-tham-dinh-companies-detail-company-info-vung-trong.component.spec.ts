import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesDetailCompanyInfoVungTrongComponent } from './plan-tham-dinh-companies-detail-company-info-vung-trong.component';

describe('PlanThamDinhCompaniesDetailCompanyInfoVungTrongComponent', () => {
  let component: PlanThamDinhCompaniesDetailCompanyInfoVungTrongComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesDetailCompanyInfoVungTrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesDetailCompanyInfoVungTrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesDetailCompanyInfoVungTrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
