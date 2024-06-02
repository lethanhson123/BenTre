import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompaniesChuoiCungUngComponent } from './plan-tham-dinh-companies-chuoi-cung-ung.component';

describe('PlanThamDinhCompaniesChuoiCungUngComponent', () => {
  let component: PlanThamDinhCompaniesChuoiCungUngComponent;
  let fixture: ComponentFixture<PlanThamDinhCompaniesChuoiCungUngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompaniesChuoiCungUngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompaniesChuoiCungUngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
