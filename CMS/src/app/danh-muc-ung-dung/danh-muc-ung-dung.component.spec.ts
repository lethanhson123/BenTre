import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucUngDungComponent } from './danh-muc-ung-dung.component';

describe('DanhMucUngDungComponent', () => {
  let component: DanhMucUngDungComponent;
  let fixture: ComponentFixture<DanhMucUngDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucUngDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucUngDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
