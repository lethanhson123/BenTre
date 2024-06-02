import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoCompanyUserComponent } from './company-info-company-user.component';

describe('CompanyInfoCompanyUserComponent', () => {
  let component: CompanyInfoCompanyUserComponent;
  let fixture: ComponentFixture<CompanyInfoCompanyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoCompanyUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoCompanyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
