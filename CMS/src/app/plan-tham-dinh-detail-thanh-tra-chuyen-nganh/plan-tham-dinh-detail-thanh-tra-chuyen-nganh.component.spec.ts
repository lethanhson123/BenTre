import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailThanhTraChuyenNganhComponent } from './plan-tham-dinh-detail-thanh-tra-chuyen-nganh.component';

describe('PlanThamDinhDetailThanhTraChuyenNganhComponent', () => {
  let component: PlanThamDinhDetailThanhTraChuyenNganhComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailThanhTraChuyenNganhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailThanhTraChuyenNganhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailThanhTraChuyenNganhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
