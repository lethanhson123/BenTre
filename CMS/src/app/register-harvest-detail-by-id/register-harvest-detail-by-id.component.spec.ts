import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHarvestDetailByIDComponent } from './register-harvest-detail-by-id.component';

describe('RegisterHarvestDetailByIDComponent', () => {
  let component: RegisterHarvestDetailByIDComponent;
  let fixture: ComponentFixture<RegisterHarvestDetailByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHarvestDetailByIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHarvestDetailByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
