import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucCompanyInfoComponent } from './danh-muc-company-info.component';

describe('DanhMucCompanyInfoComponent', () => {
  let component: DanhMucCompanyInfoComponent;
  let fixture: ComponentFixture<DanhMucCompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucCompanyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
