import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailCompanyInfoVungTrongComponent } from './plan-tham-dinh-detail-company-info-vung-trong.component';

describe('PlanThamDinhDetailCompanyInfoVungTrongComponent', () => {
  let component: PlanThamDinhDetailCompanyInfoVungTrongComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailCompanyInfoVungTrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailCompanyInfoVungTrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailCompanyInfoVungTrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
