import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesGiamSatDuLuongComponent } from './plan-tham-dinh-companies-giam-sat-du-luong.component';

describe('PlanThamDinhCompaniesGiamSatDuLuongComponent', () => {
  let component: PlanThamDinhCompaniesGiamSatDuLuongComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesGiamSatDuLuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesGiamSatDuLuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesGiamSatDuLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
