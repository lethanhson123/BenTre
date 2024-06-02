import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucThiTruongComponent } from './danh-muc-thi-truong.component';

describe('DanhMucThiTruongComponent', () => {
  let component: DanhMucThiTruongComponent;
  let fixture: ComponentFixture<DanhMucThiTruongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucThiTruongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucThiTruongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
