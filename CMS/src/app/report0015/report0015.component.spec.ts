import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0015Component } from './report0015.component';

describe('Report0015Component', () => {
  let component: Report0015Component;
  let fixture: ComponentFixture<Report0015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
