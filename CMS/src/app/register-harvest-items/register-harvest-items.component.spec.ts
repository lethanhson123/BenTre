import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHarvestItemsComponent } from './register-harvest-items.component';

describe('RegisterHarvestItemsComponent', () => {
  let component: RegisterHarvestItemsComponent;
  let fixture: ComponentFixture<RegisterHarvestItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHarvestItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHarvestItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
