import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucThoiGianLayMauComponent } from './danh-muc-thoi-gian-lay-mau.component';

describe('DanhMucThoiGianLayMauComponent', () => {
  let component: DanhMucThoiGianLayMauComponent;
  let fixture: ComponentFixture<DanhMucThoiGianLayMauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucThoiGianLayMauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucThoiGianLayMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
