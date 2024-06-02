import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhGiamSatDuLuongComponent } from './plan-tham-dinh-giam-sat-du-luong.component';

describe('PlanThamDinhGiamSatDuLuongComponent', () => {
  let component: PlanThamDinhGiamSatDuLuongComponent;
  let fixture: ComponentFixture<PlanThamDinhGiamSatDuLuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhGiamSatDuLuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhGiamSatDuLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
