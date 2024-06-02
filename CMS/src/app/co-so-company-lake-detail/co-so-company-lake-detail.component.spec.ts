import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyLakeDetailComponent } from './co-so-company-lake-detail.component';

describe('CoSoCompanyLakeDetailComponent', () => {
  let component: CoSoCompanyLakeDetailComponent;
  let fixture: ComponentFixture<CoSoCompanyLakeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyLakeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyLakeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
