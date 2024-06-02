import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0010Component } from './report0010.component';

describe('Report0010Component', () => {
  let component: Report0010Component;
  let fixture: ComponentFixture<Report0010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
