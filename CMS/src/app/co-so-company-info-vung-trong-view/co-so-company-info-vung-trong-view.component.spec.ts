import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoVungTrongViewComponent } from './co-so-company-info-vung-trong-view.component';

describe('CoSoCompanyInfoVungTrongViewComponent', () => {
  let component: CoSoCompanyInfoVungTrongViewComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoVungTrongViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoVungTrongViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoVungTrongViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
