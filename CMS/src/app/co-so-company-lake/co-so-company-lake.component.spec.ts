import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyLakeComponent } from './co-so-company-lake.component';

describe('CoSoCompanyLakeComponent', () => {
  let component: CoSoCompanyLakeComponent;
  let fixture: ComponentFixture<CoSoCompanyLakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyLakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyLakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
