import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucXepLoaiComponent } from './danh-muc-xep-loai.component';

describe('DanhMucXepLoaiComponent', () => {
  let component: DanhMucXepLoaiComponent;
  let fixture: ComponentFixture<DanhMucXepLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucXepLoaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucXepLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
