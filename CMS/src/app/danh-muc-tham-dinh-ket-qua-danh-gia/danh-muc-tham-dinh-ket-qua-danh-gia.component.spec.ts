import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucThamDinhKetQuaDanhGiaComponent } from './danh-muc-tham-dinh-ket-qua-danh-gia.component';

describe('DanhMucThamDinhKetQuaDanhGiaComponent', () => {
  let component: DanhMucThamDinhKetQuaDanhGiaComponent;
  let fixture: ComponentFixture<DanhMucThamDinhKetQuaDanhGiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucThamDinhKetQuaDanhGiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucThamDinhKetQuaDanhGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
