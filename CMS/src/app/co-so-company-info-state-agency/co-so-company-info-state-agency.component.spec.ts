import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoStateAgencyComponent } from './co-so-company-info-state-agency.component';

describe('CoSoCompanyInfoStateAgencyComponent', () => {
  let component: CoSoCompanyInfoStateAgencyComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoStateAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoStateAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoStateAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
