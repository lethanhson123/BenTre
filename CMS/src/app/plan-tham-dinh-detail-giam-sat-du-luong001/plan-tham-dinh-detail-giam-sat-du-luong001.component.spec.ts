import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailGiamSatDuLuong001Component } from './plan-tham-dinh-detail-giam-sat-du-luong001.component';

describe('PlanThamDinhDetailGiamSatDuLuong001Component', () => {
  let component: PlanThamDinhDetailGiamSatDuLuong001Component;
  let fixture: ComponentFixture<PlanThamDinhDetailGiamSatDuLuong001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailGiamSatDuLuong001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailGiamSatDuLuong001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
