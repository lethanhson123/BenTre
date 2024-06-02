import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhVienLichSuThongBaoViewComponent } from './thanh-vien-lich-su-thong-bao-view.component';

describe('ThanhVienLichSuThongBaoViewComponent', () => {
  let component: ThanhVienLichSuThongBaoViewComponent;
  let fixture: ComponentFixture<ThanhVienLichSuThongBaoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhVienLichSuThongBaoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhVienLichSuThongBaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
