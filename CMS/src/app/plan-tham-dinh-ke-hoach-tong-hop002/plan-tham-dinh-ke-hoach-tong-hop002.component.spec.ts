import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhKeHoachTongHop002Component } from './plan-tham-dinh-ke-hoach-tong-hop002.component';

describe('PlanThamDinhKeHoachTongHop002Component', () => {
  let component: PlanThamDinhKeHoachTongHop002Component;
  let fixture: ComponentFixture<PlanThamDinhKeHoachTongHop002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhKeHoachTongHop002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhKeHoachTongHop002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
