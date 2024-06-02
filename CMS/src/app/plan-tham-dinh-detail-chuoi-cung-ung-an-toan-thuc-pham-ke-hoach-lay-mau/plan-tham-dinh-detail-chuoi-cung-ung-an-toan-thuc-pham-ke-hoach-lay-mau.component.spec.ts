import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent } from './plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau.component';

describe('PlanThamDinhDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent', () => {
  let component: PlanThamDinhDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
