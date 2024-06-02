import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent } from './co-so-plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham.component';

describe('CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent', () => {
  let component: CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent;
  let fixture: ComponentFixture<CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
