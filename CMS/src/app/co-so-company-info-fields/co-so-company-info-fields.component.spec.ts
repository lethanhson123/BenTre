import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoFieldsComponent } from './co-so-company-info-fields.component';

describe('CoSoCompanyInfoFieldsComponent', () => {
  let component: CoSoCompanyInfoFieldsComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
