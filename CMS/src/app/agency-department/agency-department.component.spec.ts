import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDepartmentComponent } from './agency-department.component';

describe('AgencyDepartmentComponent', () => {
  let component: AgencyDepartmentComponent;
  let fixture: ComponentFixture<AgencyDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
