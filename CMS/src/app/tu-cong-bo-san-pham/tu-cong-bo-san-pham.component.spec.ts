import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuCongBoSanPhamComponent } from './tu-cong-bo-san-pham.component';

describe('TuCongBoSanPhamComponent', () => {
  let component: TuCongBoSanPhamComponent;
  let fixture: ComponentFixture<TuCongBoSanPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuCongBoSanPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuCongBoSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
