import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailComponent } from './plan-tham-dinh-detail.component';

describe('PlanThamDinhDetailComponent', () => {
  let component: PlanThamDinhDetailComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
