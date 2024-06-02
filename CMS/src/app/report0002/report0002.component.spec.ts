import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0002Component } from './report0002.component';

describe('Report0002Component', () => {
  let component: Report0002Component;
  let fixture: ComponentFixture<Report0002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
