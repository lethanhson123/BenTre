import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0011Component } from './report0011.component';

describe('Report0011Component', () => {
  let component: Report0011Component;
  let fixture: ComponentFixture<Report0011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
