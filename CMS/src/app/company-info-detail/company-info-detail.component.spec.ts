import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoDetailComponent } from './company-info-detail.component';

describe('CompanyInfoDetailComponent', () => {
  let component: CompanyInfoDetailComponent;
  let fixture: ComponentFixture<CompanyInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
