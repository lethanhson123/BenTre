import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0007Component } from './report0007.component';

describe('Report0007Component', () => {
  let component: Report0007Component;
  let fixture: ComponentFixture<Report0007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0007Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
