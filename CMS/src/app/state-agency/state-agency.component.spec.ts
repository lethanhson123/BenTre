import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateAgencyComponent } from './state-agency.component';

describe('StateAgencyComponent', () => {
  let component: StateAgencyComponent;
  let fixture: ComponentFixture<StateAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
