import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoComponent } from './co-so-company-info.component';

describe('CoSoCompanyInfoComponent', () => {
  let component: CoSoCompanyInfoComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
