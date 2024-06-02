import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailGiamSatDuLuongComponent } from './plan-tham-dinh-detail-giam-sat-du-luong.component';

describe('PlanThamDinhDetailGiamSatDuLuongComponent', () => {
  let component: PlanThamDinhDetailGiamSatDuLuongComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailGiamSatDuLuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailGiamSatDuLuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailGiamSatDuLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
