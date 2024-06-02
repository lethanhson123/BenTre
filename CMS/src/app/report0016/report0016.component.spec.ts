import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report0016Component } from './report0016.component';

describe('Report0016Component', () => {
  let component: Report0016Component;
  let fixture: ComponentFixture<Report0016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report0016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report0016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
