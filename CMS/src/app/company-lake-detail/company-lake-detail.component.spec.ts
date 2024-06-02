import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLakeDetailComponent } from './company-lake-detail.component';

describe('CompanyLakeDetailComponent', () => {
  let component: CompanyLakeDetailComponent;
  let fixture: ComponentFixture<CompanyLakeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyLakeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLakeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
