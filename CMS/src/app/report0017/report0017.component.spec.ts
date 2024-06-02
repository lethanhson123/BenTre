import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0017Component } from './report0017.component';

describe('Report0017Component', () => {
  let component: Report0017Component;
  let fixture: ComponentFixture<Report0017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
