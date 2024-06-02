import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoCompanyLakeComponent } from './company-info-company-lake.component';

describe('CompanyInfoCompanyLakeComponent', () => {
  let component: CompanyInfoCompanyLakeComponent;
  let fixture: ComponentFixture<CompanyInfoCompanyLakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoCompanyLakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoCompanyLakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
