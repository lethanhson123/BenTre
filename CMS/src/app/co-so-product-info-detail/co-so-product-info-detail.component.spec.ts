import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoProductInfoDetailComponent } from './co-so-product-info-detail.component';

describe('CoSoProductInfoDetailComponent', () => {
  let component: CoSoProductInfoDetailComponent;
  let fixture: ComponentFixture<CoSoProductInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoProductInfoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoProductInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
