import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesDetailChuoiCungUngComponent } from './plan-tham-dinh-companies-detail-chuoi-cung-ung.component';

describe('PlanThamDinhCompaniesDetailChuoiCungUngComponent', () => {
  let component: PlanThamDinhCompaniesDetailChuoiCungUngComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesDetailChuoiCungUngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesDetailChuoiCungUngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesDetailChuoiCungUngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
