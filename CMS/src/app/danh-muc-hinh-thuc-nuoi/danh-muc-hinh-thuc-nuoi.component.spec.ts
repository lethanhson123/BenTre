import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucHinhThucNuoiComponent } from './danh-muc-hinh-thuc-nuoi.component';

describe('DanhMucHinhThucNuoiComponent', () => {
  let component: DanhMucHinhThucNuoiComponent;
  let fixture: ComponentFixture<DanhMucHinhThucNuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucHinhThucNuoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucHinhThucNuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
