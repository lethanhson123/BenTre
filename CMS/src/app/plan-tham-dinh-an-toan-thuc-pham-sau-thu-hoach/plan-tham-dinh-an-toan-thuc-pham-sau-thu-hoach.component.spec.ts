import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhAnToanThucPhamSauThuHoachComponent } from './plan-tham-dinh-an-toan-thuc-pham-sau-thu-hoach.component';

describe('PlanThamDinhAnToanThucPhamSauThuHoachComponent', () => {
  let component: PlanThamDinhAnToanThucPhamSauThuHoachComponent;
  let fixture: ComponentFixture<PlanThamDinhAnToanThucPhamSauThuHoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhAnToanThucPhamSauThuHoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhAnToanThucPhamSauThuHoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
