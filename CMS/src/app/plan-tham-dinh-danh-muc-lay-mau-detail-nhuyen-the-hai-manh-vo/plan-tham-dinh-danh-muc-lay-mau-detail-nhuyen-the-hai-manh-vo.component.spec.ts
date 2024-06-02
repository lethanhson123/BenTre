import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail-nhuyen-the-hai-manh-vo.component';

describe('PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent', () => {
  let component: PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent;
  let fixture: ComponentFixture<PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
