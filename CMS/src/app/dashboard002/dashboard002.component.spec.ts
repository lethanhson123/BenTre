import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard002Component } from './dashboard002.component';

describe('Dashboard002Component', () => {
  let component: Dashboard002Component;
  let fixture: ComponentFixture<Dashboard002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashboard002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
