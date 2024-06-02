import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDepartmentMenusComponent } from './agency-department-menus.component';

describe('AgencyDepartmentMenusComponent', () => {
  let component: AgencyDepartmentMenusComponent;
  let fixture: ComponentFixture<AgencyDepartmentMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyDepartmentMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyDepartmentMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
