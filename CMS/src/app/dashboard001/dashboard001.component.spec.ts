import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard001Component } from './dashboard001.component';

describe('Dashboard001Component', () => {
  let component: Dashboard001Component;
  let fixture: ComponentFixture<Dashboard001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashboard001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
