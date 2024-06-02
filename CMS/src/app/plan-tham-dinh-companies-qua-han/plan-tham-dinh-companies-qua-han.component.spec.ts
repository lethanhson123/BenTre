import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesQuaHanComponent } from './plan-tham-dinh-companies-qua-han.component';

describe('PlanThamDinhCompaniesQuaHanComponent', () => {
  let component: PlanThamDinhCompaniesQuaHanComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesQuaHanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesQuaHanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesQuaHanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
