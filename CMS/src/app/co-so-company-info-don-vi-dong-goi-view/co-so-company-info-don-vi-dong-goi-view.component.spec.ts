import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoDonViDongGoiViewComponent } from './co-so-company-info-don-vi-dong-goi-view.component';

describe('CoSoCompanyInfoDonViDongGoiViewComponent', () => {
  let component: CoSoCompanyInfoDonViDongGoiViewComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoDonViDongGoiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoDonViDongGoiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoDonViDongGoiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
