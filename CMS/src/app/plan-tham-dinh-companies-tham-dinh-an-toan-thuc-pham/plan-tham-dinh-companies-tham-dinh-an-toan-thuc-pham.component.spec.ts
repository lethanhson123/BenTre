import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent } from './plan-tham-dinh-companies-tham-dinh-an-toan-thuc-pham.component';

describe('PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent', () => {
  let component: PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
