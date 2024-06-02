import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau.component';

describe('PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent', () => {
  let component: PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent;
  let fixture: ComponentFixture<PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
