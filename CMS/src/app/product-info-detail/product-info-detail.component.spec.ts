import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoDetailComponent } from './product-info-detail.component';

describe('ProductInfoDetailComponent', () => {
  let component: ProductInfoDetailComponent;
  let fixture: ComponentFixture<ProductInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
