import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent } from './plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach.component';

describe('PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent', () => {
  let component: PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
