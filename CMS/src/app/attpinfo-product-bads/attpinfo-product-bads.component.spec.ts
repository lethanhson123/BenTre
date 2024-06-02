import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPInfoProductBadsComponent } from './attpinfo-product-bads.component';

describe('ATTPInfoProductBadsComponent', () => {
  let component: ATTPInfoProductBadsComponent;
  let fixture: ComponentFixture<ATTPInfoProductBadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPInfoProductBadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPInfoProductBadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
