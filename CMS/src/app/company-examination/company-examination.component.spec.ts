import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExaminationComponent } from './company-examination.component';

describe('CompanyExaminationComponent', () => {
  let component: CompanyExaminationComponent;
  let fixture: ComponentFixture<CompanyExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExaminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
