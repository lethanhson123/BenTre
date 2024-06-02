import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoDonViDongGoiComponent } from './co-so-company-info-don-vi-dong-goi.component';

describe('CoSoCompanyInfoDonViDongGoiComponent', () => {
  let component: CoSoCompanyInfoDonViDongGoiComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoDonViDongGoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoDonViDongGoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoDonViDongGoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
