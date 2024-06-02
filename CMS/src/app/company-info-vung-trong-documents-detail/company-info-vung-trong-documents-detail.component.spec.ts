import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoVungTrongDocumentsDetailComponent } from './company-info-vung-trong-documents-detail.component';

describe('CompanyInfoVungTrongDocumentsDetailComponent', () => {
  let component: CompanyInfoVungTrongDocumentsDetailComponent;
  let fixture: ComponentFixture<CompanyInfoVungTrongDocumentsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoVungTrongDocumentsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoVungTrongDocumentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
