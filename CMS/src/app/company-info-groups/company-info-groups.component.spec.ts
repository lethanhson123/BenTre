import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoGroupsComponent } from './company-info-groups.component';

describe('CompanyInfoGroupsComponent', () => {
  let component: CompanyInfoGroupsComponent;
  let fixture: ComponentFixture<CompanyInfoGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
