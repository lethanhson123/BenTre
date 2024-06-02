import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesComponent } from './plan-tham-dinh-companies.component';

describe('PlanThamDinhCompaniesComponent', () => {
  let component: PlanThamDinhCompaniesComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
