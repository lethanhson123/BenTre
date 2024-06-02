import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailNhuyenTheHaiManhVo001Component } from './plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001.component';

describe('PlanThamDinhDetailNhuyenTheHaiManhVo001Component', () => {
  let component: PlanThamDinhDetailNhuyenTheHaiManhVo001Component;
  let fixture: ComponentFixture<PlanThamDinhDetailNhuyenTheHaiManhVo001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailNhuyenTheHaiManhVo001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailNhuyenTheHaiManhVo001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
