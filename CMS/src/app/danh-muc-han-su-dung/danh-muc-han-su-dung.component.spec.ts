import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucHanSuDungComponent } from './danh-muc-han-su-dung.component';

describe('DanhMucHanSuDungComponent', () => {
  let component: DanhMucHanSuDungComponent;
  let fixture: ComponentFixture<DanhMucHanSuDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucHanSuDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucHanSuDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
