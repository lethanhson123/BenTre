import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0001Component } from './report0001.component';

describe('Report0001Component', () => {
  let component: Report0001Component;
  let fixture: ComponentFixture<Report0001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
