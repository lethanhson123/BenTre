import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoRegisterHarvestComponent } from './co-so-register-harvest.component';

describe('CoSoRegisterHarvestComponent', () => {
  let component: CoSoRegisterHarvestComponent;
  let fixture: ComponentFixture<CoSoRegisterHarvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoRegisterHarvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoRegisterHarvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
