import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component } from './plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach001.component';

describe('PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component', () => {
  let component: PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component;
  let fixture: ComponentFixture<PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
