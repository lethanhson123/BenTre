import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhVienThongBaoComponent } from './thanh-vien-thong-bao.component';

describe('ThanhVienThongBaoComponent', () => {
  let component: ThanhVienThongBaoComponent;
  let fixture: ComponentFixture<ThanhVienThongBaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhVienThongBaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhVienThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
