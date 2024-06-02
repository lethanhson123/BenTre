import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhMaSoCoSoNuoiComponent } from './plan-tham-dinh-ma-so-co-so-nuoi.component';

describe('PlanThamDinhMaSoCoSoNuoiComponent', () => {
  let component: PlanThamDinhMaSoCoSoNuoiComponent;
  let fixture: ComponentFixture<PlanThamDinhMaSoCoSoNuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhMaSoCoSoNuoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhMaSoCoSoNuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
