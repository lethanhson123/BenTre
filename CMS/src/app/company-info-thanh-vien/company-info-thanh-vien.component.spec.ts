import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoThanhVienComponent } from './company-info-thanh-vien.component';

describe('CompanyInfoThanhVienComponent', () => {
  let component: CompanyInfoThanhVienComponent;
  let fixture: ComponentFixture<CompanyInfoThanhVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoThanhVienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoThanhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
