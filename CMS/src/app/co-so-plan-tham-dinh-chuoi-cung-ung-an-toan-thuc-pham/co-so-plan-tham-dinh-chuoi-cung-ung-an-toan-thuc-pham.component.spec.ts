import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent } from './co-so-plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham.component';

describe('CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent', () => {
  let component: CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent;
  let fixture: ComponentFixture<CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
