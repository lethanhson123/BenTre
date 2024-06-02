import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoLichSuKiemTraComponent } from './company-info-lich-su-kiem-tra.component';

describe('CompanyInfoLichSuKiemTraComponent', () => {
  let component: CompanyInfoLichSuKiemTraComponent;
  let fixture: ComponentFixture<CompanyInfoLichSuKiemTraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoLichSuKiemTraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoLichSuKiemTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
