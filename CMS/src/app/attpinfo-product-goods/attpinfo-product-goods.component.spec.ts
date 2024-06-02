import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPInfoProductGoodsComponent } from './attpinfo-product-goods.component';

describe('ATTPInfoProductGoodsComponent', () => {
  let component: ATTPInfoProductGoodsComponent;
  let fixture: ComponentFixture<ATTPInfoProductGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPInfoProductGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPInfoProductGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
