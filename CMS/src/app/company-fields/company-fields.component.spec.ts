import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFieldsComponent } from './company-fields.component';

describe('CompanyFieldsComponent', () => {
  let component: CompanyFieldsComponent;
  let fixture: ComponentFixture<CompanyFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
