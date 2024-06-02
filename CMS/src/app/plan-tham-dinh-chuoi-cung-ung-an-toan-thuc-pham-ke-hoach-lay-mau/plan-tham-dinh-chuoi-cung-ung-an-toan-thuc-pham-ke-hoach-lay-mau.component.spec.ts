import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent } from './plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau.component';

describe('PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent', () => {
  let component: PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent;
  let fixture: ComponentFixture<PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
