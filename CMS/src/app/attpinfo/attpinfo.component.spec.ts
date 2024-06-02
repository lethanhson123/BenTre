import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPInfoComponent } from './attpinfo.component';

describe('ATTPInfoComponent', () => {
  let component: ATTPInfoComponent;
  let fixture: ComponentFixture<ATTPInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
