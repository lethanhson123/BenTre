import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoStateAgencyComponent } from './company-info-state-agency.component';

describe('CompanyInfoStateAgencyComponent', () => {
  let component: CompanyInfoStateAgencyComponent;
  let fixture: ComponentFixture<CompanyInfoStateAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoStateAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoStateAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
