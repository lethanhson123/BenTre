import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoVungTrongDetailComponent } from './co-so-company-info-vung-trong-detail.component';

describe('CoSoCompanyInfoVungTrongDetailComponent', () => {
  let component: CoSoCompanyInfoVungTrongDetailComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoVungTrongDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoVungTrongDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoVungTrongDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
