import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhKeHoachTongHop001Component } from './plan-tham-dinh-ke-hoach-tong-hop001.component';

describe('PlanThamDinhKeHoachTongHop001Component', () => {
  let component: PlanThamDinhKeHoachTongHop001Component;
  let fixture: ComponentFixture<PlanThamDinhKeHoachTongHop001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhKeHoachTongHop001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhKeHoachTongHop001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
