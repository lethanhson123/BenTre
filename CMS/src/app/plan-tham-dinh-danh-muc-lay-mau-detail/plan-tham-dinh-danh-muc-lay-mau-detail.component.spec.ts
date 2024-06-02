import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDanhMucLayMauDetailComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail.component';

describe('PlanThamDinhDanhMucLayMauDetailComponent', () => {
  let component: PlanThamDinhDanhMucLayMauDetailComponent;
  let fixture: ComponentFixture<PlanThamDinhDanhMucLayMauDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDanhMucLayMauDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDanhMucLayMauDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
