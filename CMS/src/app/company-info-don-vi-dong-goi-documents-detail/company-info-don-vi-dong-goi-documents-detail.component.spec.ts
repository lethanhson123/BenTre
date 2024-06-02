import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoDonViDongGoiDocumentsDetailComponent } from './company-info-don-vi-dong-goi-documents-detail.component';

describe('CompanyInfoDonViDongGoiDocumentsDetailComponent', () => {
  let component: CompanyInfoDonViDongGoiDocumentsDetailComponent;
  let fixture: ComponentFixture<CompanyInfoDonViDongGoiDocumentsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoDonViDongGoiDocumentsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoDonViDongGoiDocumentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
