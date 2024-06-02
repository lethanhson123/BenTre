import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailMaSoCoSoNuoiComponent } from './plan-tham-dinh-detail-ma-so-co-so-nuoi.component';

describe('PlanThamDinhDetailMaSoCoSoNuoiComponent', () => {
  let component: PlanThamDinhDetailMaSoCoSoNuoiComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailMaSoCoSoNuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailMaSoCoSoNuoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailMaSoCoSoNuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
