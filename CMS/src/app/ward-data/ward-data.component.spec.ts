import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardDataComponent } from './ward-data.component';

describe('WardDataComponent', () => {
  let component: WardDataComponent;
  let fixture: ComponentFixture<WardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
