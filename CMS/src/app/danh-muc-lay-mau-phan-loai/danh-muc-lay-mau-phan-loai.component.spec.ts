import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucLayMauPhanLoaiComponent } from './danh-muc-lay-mau-phan-loai.component';

describe('DanhMucLayMauPhanLoaiComponent', () => {
  let component: DanhMucLayMauPhanLoaiComponent;
  let fixture: ComponentFixture<DanhMucLayMauPhanLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucLayMauPhanLoaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucLayMauPhanLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
