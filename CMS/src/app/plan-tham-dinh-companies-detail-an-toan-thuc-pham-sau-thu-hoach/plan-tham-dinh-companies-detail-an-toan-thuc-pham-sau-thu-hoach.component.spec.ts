import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent } from './plan-tham-dinh-companies-detail-an-toan-thuc-pham-sau-thu-hoach.component';

describe('PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent', () => {
  let component: PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
