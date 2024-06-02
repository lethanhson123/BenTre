import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDanhMucLayMauDetailAnToanThucPhamSauThuHoachComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail-an-toan-thuc-pham-sau-thu-hoach.component';

describe('PlanThamDinhDanhMucLayMauDetailAnToanThucPhamSauThuHoachComponent', () => {
  let component: PlanThamDinhDanhMucLayMauDetailAnToanThucPhamSauThuHoachComponent;
  let fixture: ComponentFixture<PlanThamDinhDanhMucLayMauDetailAnToanThucPhamSauThuHoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDanhMucLayMauDetailAnToanThucPhamSauThuHoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDanhMucLayMauDetailAnToanThucPhamSauThuHoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
