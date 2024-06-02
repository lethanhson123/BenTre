import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucCompanyTinhTrangComponent } from './danh-muc-company-tinh-trang.component';

describe('DanhMucCompanyTinhTrangComponent', () => {
  let component: DanhMucCompanyTinhTrangComponent;
  let fixture: ComponentFixture<DanhMucCompanyTinhTrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucCompanyTinhTrangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucCompanyTinhTrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
