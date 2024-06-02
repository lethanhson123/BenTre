import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucLayMauChiTieuDetailComponent } from './danh-muc-lay-mau-chi-tieu-detail.component';

describe('DanhMucLayMauChiTieuDetailComponent', () => {
  let component: DanhMucLayMauChiTieuDetailComponent;
  let fixture: ComponentFixture<DanhMucLayMauChiTieuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucLayMauChiTieuDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucLayMauChiTieuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
