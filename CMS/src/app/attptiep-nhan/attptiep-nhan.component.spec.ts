import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPTiepNhanComponent } from './attptiep-nhan.component';

describe('ATTPTiepNhanComponent', () => {
  let component: ATTPTiepNhanComponent;
  let fixture: ComponentFixture<ATTPTiepNhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPTiepNhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPTiepNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
