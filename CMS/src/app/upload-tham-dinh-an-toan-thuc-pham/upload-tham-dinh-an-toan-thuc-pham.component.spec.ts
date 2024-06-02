import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadThamDinhAnToanThucPhamComponent } from './upload-tham-dinh-an-toan-thuc-pham.component';

describe('UploadThamDinhAnToanThucPhamComponent', () => {
  let component: UploadThamDinhAnToanThucPhamComponent;
  let fixture: ComponentFixture<UploadThamDinhAnToanThucPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadThamDinhAnToanThucPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadThamDinhAnToanThucPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
