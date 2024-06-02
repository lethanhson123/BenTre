import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucATTPXepLoaiComponent } from './danh-muc-attpxep-loai.component';

describe('DanhMucATTPXepLoaiComponent', () => {
  let component: DanhMucATTPXepLoaiComponent;
  let fixture: ComponentFixture<DanhMucATTPXepLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucATTPXepLoaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucATTPXepLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
