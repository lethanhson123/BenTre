import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoVungTrongComponent } from './co-so-company-info-vung-trong.component';

describe('CoSoCompanyInfoVungTrongComponent', () => {
  let component: CoSoCompanyInfoVungTrongComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoVungTrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoVungTrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoVungTrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
