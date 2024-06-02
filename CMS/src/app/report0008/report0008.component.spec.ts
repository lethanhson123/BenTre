import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0008Component } from './report0008.component';

describe('Report0008Component', () => {
  let component: Report0008Component;
  let fixture: ComponentFixture<Report0008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0008Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
