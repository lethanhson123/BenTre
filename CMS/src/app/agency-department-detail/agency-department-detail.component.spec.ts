import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDepartmentDetailComponent } from './agency-department-detail.component';

describe('AgencyDepartmentDetailComponent', () => {
  let component: AgencyDepartmentDetailComponent;
  let fixture: ComponentFixture<AgencyDepartmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyDepartmentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyDepartmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
