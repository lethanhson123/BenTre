import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesDetailGiamSatDuLuongComponent } from './plan-tham-dinh-companies-detail-giam-sat-du-luong.component';

describe('PlanThamDinhCompaniesDetailGiamSatDuLuongComponent', () => {
  let component: PlanThamDinhCompaniesDetailGiamSatDuLuongComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesDetailGiamSatDuLuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesDetailGiamSatDuLuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesDetailGiamSatDuLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
