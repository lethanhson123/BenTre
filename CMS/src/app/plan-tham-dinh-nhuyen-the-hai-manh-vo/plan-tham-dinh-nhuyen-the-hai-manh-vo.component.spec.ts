import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhNhuyenTheHaiManhVoComponent } from './plan-tham-dinh-nhuyen-the-hai-manh-vo.component';

describe('PlanThamDinhNhuyenTheHaiManhVoComponent', () => {
  let component: PlanThamDinhNhuyenTheHaiManhVoComponent;
  let fixture: ComponentFixture<PlanThamDinhNhuyenTheHaiManhVoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhNhuyenTheHaiManhVoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhNhuyenTheHaiManhVoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
