import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoDonViDongGoiComponent } from './company-info-don-vi-dong-goi.component';

describe('CompanyInfoDonViDongGoiComponent', () => {
  let component: CompanyInfoDonViDongGoiComponent;
  let fixture: ComponentFixture<CompanyInfoDonViDongGoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoDonViDongGoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoDonViDongGoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
