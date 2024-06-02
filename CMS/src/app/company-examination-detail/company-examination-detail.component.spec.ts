import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExaminationDetailComponent } from './company-examination-detail.component';

describe('CompanyExaminationDetailComponent', () => {
  let component: CompanyExaminationDetailComponent;
  let fixture: ComponentFixture<CompanyExaminationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExaminationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExaminationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
