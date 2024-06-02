import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoProductInfoComponent } from './co-so-product-info.component';

describe('CoSoProductInfoComponent', () => {
  let component: CoSoProductInfoComponent;
  let fixture: ComponentFixture<CoSoProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoProductInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
