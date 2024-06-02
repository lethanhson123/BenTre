import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyUserComponent } from './agency-user.component';

describe('AgencyUserComponent', () => {
  let component: AgencyUserComponent;
  let fixture: ComponentFixture<AgencyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
