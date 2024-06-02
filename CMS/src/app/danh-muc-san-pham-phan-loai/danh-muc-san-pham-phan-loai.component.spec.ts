import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucSanPhamPhanLoaiComponent } from './danh-muc-san-pham-phan-loai.component';

describe('DanhMucSanPhamPhanLoaiComponent', () => {
  let component: DanhMucSanPhamPhanLoaiComponent;
  let fixture: ComponentFixture<DanhMucSanPhamPhanLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucSanPhamPhanLoaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucSanPhamPhanLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
