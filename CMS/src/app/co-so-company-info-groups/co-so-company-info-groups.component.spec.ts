import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCompanyInfoGroupsComponent } from './co-so-company-info-groups.component';

describe('CoSoCompanyInfoGroupsComponent', () => {
  let component: CoSoCompanyInfoGroupsComponent;
  let fixture: ComponentFixture<CoSoCompanyInfoGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCompanyInfoGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCompanyInfoGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
