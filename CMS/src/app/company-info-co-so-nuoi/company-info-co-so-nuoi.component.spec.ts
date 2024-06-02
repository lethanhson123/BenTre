import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoCoSoNuoiComponent } from './company-info-co-so-nuoi.component';

describe('CompanyInfoCoSoNuoiComponent', () => {
  let component: CompanyInfoCoSoNuoiComponent;
  let fixture: ComponentFixture<CompanyInfoCoSoNuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoCoSoNuoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoCoSoNuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
