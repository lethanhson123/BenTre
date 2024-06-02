import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyStaffExamDetailComponent } from './co-so-company-staff-exam-detail.component';

describe('CoSoCompanyStaffExamDetailComponent', () => {
  let component: CoSoCompanyStaffExamDetailComponent;
  let fixture: ComponentFixture<CoSoCompanyStaffExamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyStaffExamDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyStaffExamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
