import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucThanhVienDetailComponent } from './danh-muc-thanh-vien-detail.component';

describe('DanhMucThanhVienDetailComponent', () => {
  let component: DanhMucThanhVienDetailComponent;
  let fixture: ComponentFixture<DanhMucThanhVienDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucThanhVienDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucThanhVienDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
