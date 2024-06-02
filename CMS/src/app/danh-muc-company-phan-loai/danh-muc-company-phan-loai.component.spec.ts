import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucCompanyPhanLoaiComponent } from './danh-muc-company-phan-loai.component';

describe('DanhMucCompanyPhanLoaiComponent', () => {
  let component: DanhMucCompanyPhanLoaiComponent;
  let fixture: ComponentFixture<DanhMucCompanyPhanLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucCompanyPhanLoaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucCompanyPhanLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
