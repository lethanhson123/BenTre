import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailChuoiCungUngComponent } from './plan-tham-dinh-detail-chuoi-cung-ung.component';

describe('PlanThamDinhDetailChuoiCungUngComponent', () => {
  let component: PlanThamDinhDetailChuoiCungUngComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailChuoiCungUngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailChuoiCungUngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailChuoiCungUngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
