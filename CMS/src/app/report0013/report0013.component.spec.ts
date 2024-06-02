import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0013Component } from './report0013.component';

describe('Report0013Component', () => {
  let component: Report0013Component;
  let fixture: ComponentFixture<Report0013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0013Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
