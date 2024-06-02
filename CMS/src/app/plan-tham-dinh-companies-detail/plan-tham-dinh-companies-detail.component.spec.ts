import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesDetailComponent } from './plan-tham-dinh-companies-detail.component';

describe('PlanThamDinhCompaniesDetailComponent', () => {
  let component: PlanThamDinhCompaniesDetailComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
