import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucLayMauChiTieuComponent } from './danh-muc-lay-mau-chi-tieu.component';

describe('DanhMucLayMauChiTieuComponent', () => {
  let component: DanhMucLayMauChiTieuComponent;
  let fixture: ComponentFixture<DanhMucLayMauChiTieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucLayMauChiTieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucLayMauChiTieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
