import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhThanhTraChuyenNganhComponent } from './plan-tham-dinh-thanh-tra-chuyen-nganh.component';

describe('PlanThamDinhThanhTraChuyenNganhComponent', () => {
  let component: PlanThamDinhThanhTraChuyenNganhComponent;
  let fixture: ComponentFixture<PlanThamDinhThanhTraChuyenNganhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhThanhTraChuyenNganhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhThanhTraChuyenNganhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
