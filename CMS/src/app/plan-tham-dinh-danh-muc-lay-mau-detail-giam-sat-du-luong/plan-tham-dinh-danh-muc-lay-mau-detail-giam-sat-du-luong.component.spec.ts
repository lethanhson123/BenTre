import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDanhMucLayMauDetailGiamSatDuLuongComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail-giam-sat-du-luong.component';

describe('PlanThamDinhDanhMucLayMauDetailGiamSatDuLuongComponent', () => {
  let component: PlanThamDinhDanhMucLayMauDetailGiamSatDuLuongComponent;
  let fixture: ComponentFixture<PlanThamDinhDanhMucLayMauDetailGiamSatDuLuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDanhMucLayMauDetailGiamSatDuLuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDanhMucLayMauDetailGiamSatDuLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
