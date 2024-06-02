import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuCongBoSanPhamDetailComponent } from './tu-cong-bo-san-pham-detail.component';

describe('TuCongBoSanPhamDetailComponent', () => {
  let component: TuCongBoSanPhamDetailComponent;
  let fixture: ComponentFixture<TuCongBoSanPhamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuCongBoSanPhamDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuCongBoSanPhamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
