import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailNhuyenTheHaiManhVoComponent } from './plan-tham-dinh-detail-nhuyen-the-hai-manh-vo.component';

describe('PlanThamDinhDetailNhuyenTheHaiManhVoComponent', () => {
  let component: PlanThamDinhDetailNhuyenTheHaiManhVoComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailNhuyenTheHaiManhVoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailNhuyenTheHaiManhVoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailNhuyenTheHaiManhVoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
