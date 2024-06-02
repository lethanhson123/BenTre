import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoVungTrongComponent } from './company-info-vung-trong.component';

describe('CompanyInfoVungTrongComponent', () => {
  let component: CompanyInfoVungTrongComponent;
  let fixture: ComponentFixture<CompanyInfoVungTrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoVungTrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoVungTrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
