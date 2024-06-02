import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoDetail001Component } from './product-info-detail001.component';

describe('ProductInfoDetail001Component', () => {
  let component: ProductInfoDetail001Component;
  let fixture: ComponentFixture<ProductInfoDetail001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoDetail001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoDetail001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
