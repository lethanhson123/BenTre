import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoDonViDongGoiDetailComponent } from './company-info-don-vi-dong-goi-detail.component';

describe('CompanyInfoDonViDongGoiDetailComponent', () => {
  let component: CompanyInfoDonViDongGoiDetailComponent;
  let fixture: ComponentFixture<CompanyInfoDonViDongGoiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoDonViDongGoiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoDonViDongGoiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
