import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailCoSoNuoiComponent } from './plan-tham-dinh-detail-co-so-nuoi.component';

describe('PlanThamDinhDetailCoSoNuoiComponent', () => {
  let component: PlanThamDinhDetailCoSoNuoiComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailCoSoNuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailCoSoNuoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailCoSoNuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
