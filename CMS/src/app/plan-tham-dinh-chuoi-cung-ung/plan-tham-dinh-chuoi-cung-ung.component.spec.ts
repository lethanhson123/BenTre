import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhChuoiCungUngComponent } from './plan-tham-dinh-chuoi-cung-ung.component';

describe('PlanThamDinhChuoiCungUngComponent', () => {
  let component: PlanThamDinhChuoiCungUngComponent;
  let fixture: ComponentFixture<PlanThamDinhChuoiCungUngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhChuoiCungUngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhChuoiCungUngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
