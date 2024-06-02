import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucDangKyCapGiayComponent } from './danh-muc-dang-ky-cap-giay.component';

describe('DanhMucDangKyCapGiayComponent', () => {
  let component: DanhMucDangKyCapGiayComponent;
  let fixture: ComponentFixture<DanhMucDangKyCapGiayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucDangKyCapGiayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucDangKyCapGiayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
