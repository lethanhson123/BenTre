import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHarvestComponent } from './register-harvest.component';

describe('RegisterHarvestComponent', () => {
  let component: RegisterHarvestComponent;
  let fixture: ComponentFixture<RegisterHarvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHarvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHarvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
