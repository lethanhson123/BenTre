import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyExaminationComponent } from './co-so-company-examination.component';

describe('CoSoCompanyExaminationComponent', () => {
  let component: CoSoCompanyExaminationComponent;
  let fixture: ComponentFixture<CoSoCompanyExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyExaminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
