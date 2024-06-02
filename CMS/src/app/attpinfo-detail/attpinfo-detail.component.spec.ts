import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPInfoDetailComponent } from './attpinfo-detail.component';

describe('ATTPInfoDetailComponent', () => {
  let component: ATTPInfoDetailComponent;
  let fixture: ComponentFixture<ATTPInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPInfoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
