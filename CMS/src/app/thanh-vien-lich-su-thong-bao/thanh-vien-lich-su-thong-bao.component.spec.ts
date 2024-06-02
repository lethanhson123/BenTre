import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhVienLichSuThongBaoComponent } from './thanh-vien-lich-su-thong-bao.component';

describe('ThanhVienLichSuThongBaoComponent', () => {
  let component: ThanhVienLichSuThongBaoComponent;
  let fixture: ComponentFixture<ThanhVienLichSuThongBaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhVienLichSuThongBaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhVienLichSuThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
