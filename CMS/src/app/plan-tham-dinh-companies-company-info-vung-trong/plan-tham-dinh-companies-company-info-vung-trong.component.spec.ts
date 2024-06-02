import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesCompanyInfoVungTrongComponent } from './plan-tham-dinh-companies-company-info-vung-trong.component';

describe('PlanThamDinhCompaniesCompanyInfoVungTrongComponent', () => {
  let component: PlanThamDinhCompaniesCompanyInfoVungTrongComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesCompanyInfoVungTrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesCompanyInfoVungTrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesCompanyInfoVungTrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
