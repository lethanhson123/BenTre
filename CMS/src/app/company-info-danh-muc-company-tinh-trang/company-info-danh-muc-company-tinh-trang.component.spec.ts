import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoDanhMucCompanyTinhTrangComponent } from './company-info-danh-muc-company-tinh-trang.component';

describe('CompanyInfoDanhMucCompanyTinhTrangComponent', () => {
  let component: CompanyInfoDanhMucCompanyTinhTrangComponent;
  let fixture: ComponentFixture<CompanyInfoDanhMucCompanyTinhTrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoDanhMucCompanyTinhTrangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoDanhMucCompanyTinhTrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
