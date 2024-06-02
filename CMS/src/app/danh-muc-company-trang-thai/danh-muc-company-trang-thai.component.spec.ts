import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucCompanyTrangThaiComponent } from './danh-muc-company-trang-thai.component';

describe('DanhMucCompanyTrangThaiComponent', () => {
  let component: DanhMucCompanyTrangThaiComponent;
  let fixture: ComponentFixture<DanhMucCompanyTrangThaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucCompanyTrangThaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucCompanyTrangThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
