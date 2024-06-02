import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLakeMapComponent } from './company-lake-map.component';

describe('CompanyLakeMapComponent', () => {
  let component: CompanyLakeMapComponent;
  let fixture: ComponentFixture<CompanyLakeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyLakeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLakeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
