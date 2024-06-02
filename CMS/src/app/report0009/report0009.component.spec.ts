import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0009Component } from './report0009.component';

describe('Report0009Component', () => {
  let component: Report0009Component;
  let fixture: ComponentFixture<Report0009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0009Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
