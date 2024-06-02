import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoDonViDongGoiDetailComponent } from './co-so-company-info-don-vi-dong-goi-detail.component';

describe('CoSoCompanyInfoDonViDongGoiDetailComponent', () => {
  let component: CoSoCompanyInfoDonViDongGoiDetailComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoDonViDongGoiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoDonViDongGoiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoDonViDongGoiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
