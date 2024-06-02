import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesLichSuComponent } from './plan-tham-dinh-companies-lich-su.component';

describe('PlanThamDinhCompaniesLichSuComponent', () => {
  let component: PlanThamDinhCompaniesLichSuComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesLichSuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesLichSuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesLichSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
