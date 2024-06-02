import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamKet17Component } from './cam-ket17.component';

describe('CamKet17Component', () => {
  let component: CamKet17Component;
  let fixture: ComponentFixture<CamKet17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamKet17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamKet17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
