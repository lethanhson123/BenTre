import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailCompanyInfoDonViDongGoiComponent } from './plan-tham-dinh-detail-company-info-don-vi-dong-goi.component';

describe('PlanThamDinhDetailCompanyInfoDonViDongGoiComponent', () => {
  let component: PlanThamDinhDetailCompanyInfoDonViDongGoiComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailCompanyInfoDonViDongGoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailCompanyInfoDonViDongGoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailCompanyInfoDonViDongGoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
