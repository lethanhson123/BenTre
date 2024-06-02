import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhComponent } from './plan-tham-dinh.component';

describe('PlanThamDinhComponent', () => {
  let component: PlanThamDinhComponent;
  let fixture: ComponentFixture<PlanThamDinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
