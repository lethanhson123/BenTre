import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfo001Component } from './product-info001.component';

describe('ProductInfo001Component', () => {
  let component: ProductInfo001Component;
  let fixture: ComponentFixture<ProductInfo001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfo001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfo001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
