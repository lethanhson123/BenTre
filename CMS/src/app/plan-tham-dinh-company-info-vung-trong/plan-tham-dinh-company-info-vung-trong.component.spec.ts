import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompanyInfoVungTrongComponent } from './plan-tham-dinh-company-info-vung-trong.component';

describe('PlanThamDinhCompanyInfoVungTrongComponent', () => {
  let component: PlanThamDinhCompanyInfoVungTrongComponent;
  let fixture: ComponentFixture<PlanThamDinhCompanyInfoVungTrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompanyInfoVungTrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompanyInfoVungTrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
