import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report00040005Component } from './report00040005.component';

describe('Report00040005Component', () => {
  let component: Report00040005Component;
  let fixture: ComponentFixture<Report00040005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report00040005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report00040005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
