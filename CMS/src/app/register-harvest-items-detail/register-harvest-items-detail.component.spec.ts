import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHarvestItemsDetailComponent } from './register-harvest-items-detail.component';

describe('RegisterHarvestItemsDetailComponent', () => {
  let component: RegisterHarvestItemsDetailComponent;
  let fixture: ComponentFixture<RegisterHarvestItemsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHarvestItemsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHarvestItemsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
