import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoCoSoNuoiDetailComponent } from './company-info-co-so-nuoi-detail.component';

describe('CompanyInfoCoSoNuoiDetailComponent', () => {
  let component: CompanyInfoCoSoNuoiDetailComponent;
  let fixture: ComponentFixture<CompanyInfoCoSoNuoiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoCoSoNuoiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoCoSoNuoiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
