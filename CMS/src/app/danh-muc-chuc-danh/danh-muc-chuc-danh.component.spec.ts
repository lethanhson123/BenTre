import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucChucDanhComponent } from './danh-muc-chuc-danh.component';

describe('DanhMucChucDanhComponent', () => {
  let component: DanhMucChucDanhComponent;
  let fixture: ComponentFixture<DanhMucChucDanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucChucDanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucChucDanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
