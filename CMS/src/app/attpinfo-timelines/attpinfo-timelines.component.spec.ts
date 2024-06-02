import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPInfoTimelinesComponent } from './attpinfo-timelines.component';

describe('ATTPInfoTimelinesComponent', () => {
  let component: ATTPInfoTimelinesComponent;
  let fixture: ComponentFixture<ATTPInfoTimelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPInfoTimelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPInfoTimelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
