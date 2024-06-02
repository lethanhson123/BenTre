import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucChuongTrinhQuanLyChatLuongComponent } from './danh-muc-chuong-trinh-quan-ly-chat-luong.component';

describe('DanhMucChuongTrinhQuanLyChatLuongComponent', () => {
  let component: DanhMucChuongTrinhQuanLyChatLuongComponent;
  let fixture: ComponentFixture<DanhMucChuongTrinhQuanLyChatLuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucChuongTrinhQuanLyChatLuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucChuongTrinhQuanLyChatLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
