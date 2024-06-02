import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucChucDanhDetailComponent } from './danh-muc-chuc-danh-detail.component';

describe('DanhMucChucDanhDetailComponent', () => {
  let component: DanhMucChucDanhDetailComponent;
  let fixture: ComponentFixture<DanhMucChucDanhDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucChucDanhDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucChucDanhDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
