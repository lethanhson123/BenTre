import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0014Component } from './report0014.component';

describe('Report0014Component', () => {
  let component: Report0014Component;
  let fixture: ComponentFixture<Report0014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0014Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
