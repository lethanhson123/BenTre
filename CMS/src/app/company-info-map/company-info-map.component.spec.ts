import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoMapComponent } from './company-info-map.component';

describe('CompanyInfoMapComponent', () => {
  let component: CompanyInfoMapComponent;
  let fixture: ComponentFixture<CompanyInfoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
