import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompanyInfoDonViDongGoiComponent } from './plan-tham-dinh-company-info-don-vi-dong-goi.component';

describe('PlanThamDinhCompanyInfoDonViDongGoiComponent', () => {
  let component: PlanThamDinhCompanyInfoDonViDongGoiComponent;
  let fixture: ComponentFixture<PlanThamDinhCompanyInfoDonViDongGoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompanyInfoDonViDongGoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompanyInfoDonViDongGoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
