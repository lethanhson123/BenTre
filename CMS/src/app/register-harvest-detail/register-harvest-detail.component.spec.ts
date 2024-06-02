import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHarvestDetailComponent } from './register-harvest-detail.component';

describe('RegisterHarvestDetailComponent', () => {
  let component: RegisterHarvestDetailComponent;
  let fixture: ComponentFixture<RegisterHarvestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHarvestDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHarvestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
