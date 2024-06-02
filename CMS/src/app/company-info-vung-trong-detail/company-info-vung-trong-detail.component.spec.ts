import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoVungTrongDetailComponent } from './company-info-vung-trong-detail.component';

describe('CompanyInfoVungTrongDetailComponent', () => {
  let component: CompanyInfoVungTrongDetailComponent;
  let fixture: ComponentFixture<CompanyInfoVungTrongDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoVungTrongDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoVungTrongDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
