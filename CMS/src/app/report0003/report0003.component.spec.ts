import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0003Component } from './report0003.component';

describe('Report0003Component', () => {
  let component: Report0003Component;
  let fixture: ComponentFixture<Report0003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
