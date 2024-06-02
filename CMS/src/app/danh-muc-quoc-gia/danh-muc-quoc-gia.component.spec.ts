import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucQuocGiaComponent } from './danh-muc-quoc-gia.component';

describe('DanhMucQuocGiaComponent', () => {
  let component: DanhMucQuocGiaComponent;
  let fixture: ComponentFixture<DanhMucQuocGiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucQuocGiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucQuocGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
