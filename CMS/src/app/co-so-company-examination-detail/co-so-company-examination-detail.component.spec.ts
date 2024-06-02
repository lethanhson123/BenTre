import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyExaminationDetailComponent } from './co-so-company-examination-detail.component';

describe('CoSoCompanyExaminationDetailComponent', () => {
  let component: CoSoCompanyExaminationDetailComponent;
  let fixture: ComponentFixture<CoSoCompanyExaminationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyExaminationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyExaminationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
