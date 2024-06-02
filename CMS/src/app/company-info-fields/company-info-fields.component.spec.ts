import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoFieldsComponent } from './company-info-fields.component';

describe('CompanyInfoFieldsComponent', () => {
  let component: CompanyInfoFieldsComponent;
  let fixture: ComponentFixture<CompanyInfoFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
