import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0012Component } from './report0012.component';

describe('Report0012Component', () => {
  let component: Report0012Component;
  let fixture: ComponentFixture<Report0012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
