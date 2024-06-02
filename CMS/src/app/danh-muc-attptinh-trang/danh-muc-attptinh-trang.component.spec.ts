import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucATTPTinhTrangComponent } from './danh-muc-attptinh-trang.component';

describe('DanhMucATTPTinhTrangComponent', () => {
  let component: DanhMucATTPTinhTrangComponent;
  let fixture: ComponentFixture<DanhMucATTPTinhTrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucATTPTinhTrangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucATTPTinhTrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
