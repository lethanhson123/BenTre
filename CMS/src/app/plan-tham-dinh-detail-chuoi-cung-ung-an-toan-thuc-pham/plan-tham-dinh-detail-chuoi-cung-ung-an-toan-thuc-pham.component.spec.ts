import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent } from './plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham.component';

describe('PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent', () => {
  let component: PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
